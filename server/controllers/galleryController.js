import db from '../config/db.js';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let syncInterval = null;
let isSyncing = false;

function isAuthorized(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return false;
  const token = authHeader.replace(/^Bearer\s+/i, '');
  const expectedPassword = process.env.ADMIN_PASSWORD || 'graceadmin';
  return token === expectedPassword;
}

function getSetting(key, defaultValue = '') {
  const row = db.prepare('SELECT value FROM gallery_settings WHERE key = ?').get(key);
  return row ? row.value : defaultValue;
}

function setSetting(key, value) {
  db.prepare('INSERT OR REPLACE INTO gallery_settings (key, value) VALUES (?, ?)').run(key, value);
}

// GET /api/gallery/settings
export function getSettings(req, res) {
  try {
    const settings = {
      instagramProfileUrl: getSetting('instagram_profile_url', 'https://www.instagram.com/grace_financials/'),
      instagramUsername: getSetting('instagram_username', 'grace_financials'),
      instagramProfilePic: getSetting('instagram_profile_pic', ''),
      instagramName: getSetting('instagram_name', 'Grace Financial Consultancy'),
      lastSyncedAt: getSetting('last_synced_at', ''),
      autoSyncEnabled: getSetting('auto_sync_enabled', 'true'),
    };
    return res.json({ success: true, settings });
  } catch (error) {
    console.error('Failed to get gallery settings:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch settings' });
  }
}

// POST /api/gallery/settings
export function updateSettings(req, res) {
  if (!isAuthorized(req)) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const { instagramProfileUrl, instagramUsername, instagramProfilePic, instagramName, autoSyncEnabled } = req.body;

  try {
    if (instagramProfileUrl !== undefined) setSetting('instagram_profile_url', instagramProfileUrl);
    if (instagramUsername !== undefined) setSetting('instagram_username', instagramUsername);
    if (instagramProfilePic !== undefined) setSetting('instagram_profile_pic', instagramProfilePic);
    if (instagramName !== undefined) setSetting('instagram_name', instagramName);
    if (autoSyncEnabled !== undefined) setSetting('auto_sync_enabled', autoSyncEnabled);

    return res.json({ success: true, message: 'Settings updated successfully' });
  } catch (error) {
    console.error('Failed to update gallery settings:', error);
    return res.status(500).json({ success: false, message: 'Failed to update settings' });
  }
}

// GET /api/gallery/posts
export function getPosts(req, res) {
  const { category, search, limit = 12, offset = 0 } = req.query;

  try {
    let query = 'SELECT * FROM gallery_posts';
    const params = [];
    const conditions = [];

    if (category && category !== 'All') {
      conditions.push('category = ?');
      params.push(category);
    }

    if (search) {
      conditions.push('caption LIKE ?');
      params.push(`%${search}%`);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    let countQuery = 'SELECT COUNT(*) as total FROM gallery_posts';
    if (conditions.length > 0) {
      countQuery += ' WHERE ' + conditions.join(' AND ');
    }
    const totalRow = db.prepare(countQuery).get(...params);
    const total = totalRow ? totalRow.total : 0;

    query += ' ORDER BY posted_at DESC LIMIT ? OFFSET ?';
    params.push(Number(limit), Number(offset));

    const posts = db.prepare(query).all(...params);

    return res.json({
      success: true,
      posts,
      pagination: {
        total,
        limit: Number(limit),
        offset: Number(offset),
        hasMore: Number(offset) + posts.length < total
      }
    });
  } catch (error) {
    console.error('Failed to get gallery posts:', error);
    return res.status(500).json({ success: false, message: 'Failed to fetch gallery posts' });
  }
}

async function scrapeInstagramPost(postUrl) {
  let url = postUrl.trim();
  if (!url.startsWith('http')) {
    url = 'https://' + url;
  }
  const urlObj = new URL(url);
  const cleanUrl = `${urlObj.origin}${urlObj.pathname}`;

  try {
    const response = await axios.get(cleanUrl, {
      headers: {
        'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
      timeout: 10000
    });

    const html = response.data;

    const imageRegex = /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i;
    const descRegex = /<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i;
    const typeRegex = /<meta[^>]*property=["']og:type["'][^>]*content=["']([^"']+)["']/i;

    const imageMatch = html.match(imageRegex);
    const descMatch = html.match(descRegex);
    const typeMatch = html.match(typeRegex);

    const imageUrl = imageMatch ? imageMatch[1] : null;
    let caption = descMatch ? descMatch[1] : '';
    const mediaType = typeMatch && typeMatch[1].includes('video') ? 'VIDEO' : 'IMAGE';

    if (caption) {
      caption = caption.replace(/^[^:]+on Instagram:\s*["']?|["']?$/gi, '').trim();
    }

    if (!imageUrl) {
      throw new Error('Image meta tag not found');
    }

    return {
      instagramUrl: cleanUrl,
      imageUrl,
      caption,
      mediaType,
      postedAt: new Date().toISOString()
    };
  } catch (error) {
    console.warn(`Scraping failed for ${cleanUrl}:`, error.message);
    throw new Error('Failed to scrape Instagram metadata');
  }
}

async function scrapeProfileFeed(username) {
  const urls = [];
  try {
    const url = `https://www.instagram.com/${username}/`;
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      timeout: 15000
    });

    const html = response.data;

    const postUrlRegex = /https:\/\/www\.instagram\.com\/p\/([a-zA-Z0-9_-]+)/g;
    const matches = html.matchAll(postUrlRegex);
    for (const match of matches) {
      urls.push(`https://www.instagram.com/p/${match[1]}/`);
    }

    const reelUrlRegex = /https:\/\/www\.instagram\.com\/reel\/([a-zA-Z0-9_-]+)/g;
    const reelMatches = html.matchAll(reelUrlRegex);
    for (const match of reelMatches) {
      urls.push(`https://www.instagram.com/reel/${match[1]}/`);
    }

    return [...new Set(urls)];
  } catch (error) {
    console.warn(`Profile feed scraping failed for ${username}:`, error.message);
    throw new Error('Failed to scrape Instagram profile feed');
  }
}

// POST /api/gallery/sync (manual sync)
export async function syncProfile(req, res) {
  if (!isAuthorized(req)) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  if (isSyncing) {
    return res.json({ success: false, message: 'Sync already in progress' });
  }

  try {
    const result = await performSync();
    return res.json({ success: true, ...result });
  } catch (error) {
    console.error('Sync failed:', error);
    return res.status(500).json({ success: false, message: 'Sync failed: ' + error.message });
  }
}

// GET /api/gallery/sync/status
export function getSyncStatus(req, res) {
  return res.json({
    success: true,
    syncing: isSyncing,
    lastSyncedAt: getSetting('last_synced_at', ''),
    lastSyncCount: parseInt(getSetting('last_sync_count', '0')),
    autoSyncEnabled: getSetting('auto_sync_enabled', 'true')
  });
}

async function performSync() {
  isSyncing = true;
  const startTime = new Date().toISOString();
  let added = 0;
  let skipped = 0;
  let errors = 0;

  try {
    const username = getSetting('instagram_username', 'grace_financials');
    if (!username) throw new Error('Instagram username not configured');

    const postUrls = await scrapeProfileFeed(username);
    const insertStmt = db.prepare(`
      INSERT OR IGNORE INTO gallery_posts (instagram_url, image_url, caption, posted_at, media_type, category)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    for (const postUrl of postUrls.slice(0, 20)) {
      try {
        const existing = db.prepare('SELECT id FROM gallery_posts WHERE instagram_url = ?').get(postUrl);
        if (existing) {
          skipped++;
          continue;
        }

        const scraped = await scrapeInstagramPost(postUrl);
        insertStmt.run(
          scraped.instagramUrl,
          scraped.imageUrl,
          scraped.caption || '',
          scraped.postedAt,
          scraped.mediaType,
          'Moment'
        );
        added++;
      } catch (err) {
        errors++;
        console.warn(`Failed to process ${postUrl}:`, err.message);
      }
    }

    setSetting('last_synced_at', startTime);
    setSetting('last_sync_count', String(added));

    return { added, skipped, errors, total: postUrls.length };
  } catch (error) {
    throw error;
  } finally {
    isSyncing = false;
  }
}

export function startAutoSync() {
  const intervalHours = 6;
  const intervalMs = intervalHours * 60 * 60 * 1000;

  if (syncInterval) clearInterval(syncInterval);

  syncInterval = setInterval(async () => {
    const enabled = getSetting('auto_sync_enabled', 'true');
    if (enabled !== 'true') return;

    if (isSyncing) return;

    try {
      console.log(`[AutoSync] Starting scheduled sync...`);
      const result = await performSync();
      console.log(`[AutoSync] Complete: ${result.added} added, ${result.skipped} skipped, ${result.errors} errors`);
    } catch (error) {
      console.error('[AutoSync] Failed:', error.message);
    }
  }, intervalMs);

  console.log(`[AutoSync] Scheduled every ${intervalHours} hours`);
}

export function stopAutoSync() {
  if (syncInterval) {
    clearInterval(syncInterval);
    syncInterval = null;
  }
}

// POST /api/gallery/posts
export async function createPost(req, res) {
  if (!isAuthorized(req)) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const { instagramUrl, imageUrl, caption, postedAt, mediaType, category } = req.body;

  if (instagramUrl && !imageUrl) {
    try {
      const existing = db.prepare('SELECT id FROM gallery_posts WHERE instagram_url = ?').get(instagramUrl);
      if (existing) {
        return res.status(400).json({ success: false, message: 'A post with this Instagram URL already exists in the gallery.' });
      }

      const scraped = await scrapeInstagramPost(instagramUrl);

      const stmt = db.prepare(`
        INSERT INTO gallery_posts (instagram_url, image_url, caption, posted_at, media_type, category)
        VALUES (?, ?, ?, ?, ?, ?)
      `);

      const result = stmt.run(
        scraped.instagramUrl,
        scraped.imageUrl,
        scraped.caption || caption || '',
        scraped.postedAt,
        scraped.mediaType,
        category || 'Moment'
      );

      const newPost = db.prepare('SELECT * FROM gallery_posts WHERE id = ?').get(result.lastInsertRowid);
      return res.status(201).json({ success: true, post: newPost });

    } catch (error) {
      return res.json({
        success: false,
        requireManualInput: true,
        message: 'Could not scrape Instagram URL automatically. Please provide details manually.',
        instagramUrl
      });
    }
  }

  if (!imageUrl) {
    return res.status(400).json({ success: false, message: 'Image URL or Upload is required for manual posts.' });
  }

  try {
    const stmt = db.prepare(`
      INSERT INTO gallery_posts (instagram_url, image_url, caption, posted_at, media_type, category)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      instagramUrl || null,
      imageUrl,
      caption || '',
      postedAt || new Date().toISOString(),
      mediaType || 'IMAGE',
      category || 'Moment'
    );

    const newPost = db.prepare('SELECT * FROM gallery_posts WHERE id = ?').get(result.lastInsertRowid);
    return res.status(201).json({ success: true, post: newPost });
  } catch (error) {
    console.error('Failed to create manual post:', error);
    if (error.message.includes('UNIQUE')) {
      return res.status(400).json({ success: false, message: 'A post with this Instagram URL already exists.' });
    }
    return res.status(500).json({ success: false, message: 'Failed to create post' });
  }
}

// PUT /api/gallery/posts/:id
export function updatePost(req, res) {
  if (!isAuthorized(req)) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const { id } = req.params;
  const { instagramUrl, imageUrl, caption, postedAt, mediaType, category } = req.body;

  try {
    const existing = db.prepare('SELECT id FROM gallery_posts WHERE id = ?').get(id);
    if (!existing) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    const stmt = db.prepare(`
      UPDATE gallery_posts
      SET instagram_url = ?, image_url = ?, caption = ?, posted_at = ?, media_type = ?, category = ?
      WHERE id = ?
    `);

    stmt.run(
      instagramUrl || null,
      imageUrl,
      caption || '',
      postedAt || new Date().toISOString(),
      mediaType || 'IMAGE',
      category || 'Moment',
      id
    );

    const updatedPost = db.prepare('SELECT * FROM gallery_posts WHERE id = ?').get(id);
    return res.json({ success: true, post: updatedPost });
  } catch (error) {
    console.error('Failed to update post:', error);
    return res.status(500).json({ success: false, message: 'Failed to update post' });
  }
}

// DELETE /api/gallery/posts/:id
export function deletePost(req, res) {
  if (!isAuthorized(req)) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const { id } = req.params;

  try {
    const existing = db.prepare('SELECT id FROM gallery_posts WHERE id = ?').get(id);
    if (!existing) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    db.prepare('DELETE FROM gallery_posts WHERE id = ?').run(id);
    return res.json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Failed to delete post:', error);
    return res.status(500).json({ success: false, message: 'Failed to delete post' });
  }
}

// POST /api/gallery/upload
export function uploadImage(req, res) {
  if (!isAuthorized(req)) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  const { imageBase64, filename } = req.body;
  if (!imageBase64) {
    return res.status(400).json({ success: false, message: 'No image data provided' });
  }

  try {
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
    const ext = filename ? path.extname(filename) : '.png';
    const uniqueFilename = `gallery-${Date.now()}${ext}`;

    const uploadsDir = path.join(__dirname, '..', '..', 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filepath = path.join(uploadsDir, uniqueFilename);
    fs.writeFileSync(filepath, base64Data, 'base64');

    return res.json({
      success: true,
      imageUrl: `/uploads/${uniqueFilename}`
    });
  } catch (error) {
    console.error('Image upload failed:', error);
    return res.status(500).json({ success: false, message: 'Image upload failed: ' + error.message });
  }
}
