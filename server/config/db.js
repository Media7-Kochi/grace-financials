import Database from 'better-sqlite3';
import { mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, '..', 'data');

if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
}

const db = new Database(join(dataDir, 'applications.db'));

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    date_of_birth TEXT,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    loan_type TEXT,
    loan_amount TEXT NOT NULL,
    employment_type TEXT,
    monthly_income TEXT,
    cibil_score TEXT,
    bank_transfer TEXT,
    address TEXT,
    notes TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

try { db.exec(`ALTER TABLE applications ADD COLUMN cibil_score TEXT`) } catch {}
try { db.exec(`ALTER TABLE applications ADD COLUMN bank_transfer TEXT`) } catch {}

db.exec(`
  CREATE TABLE IF NOT EXISTS gallery_settings (
    key TEXT PRIMARY KEY,
    value TEXT
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS gallery_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    instagram_url TEXT UNIQUE,
    image_url TEXT NOT NULL,
    caption TEXT,
    posted_at TEXT DEFAULT (datetime('now')),
    media_type TEXT DEFAULT 'IMAGE',
    category TEXT DEFAULT 'Moment',
    likes_count INTEGER DEFAULT 0,
    comments_count INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);


export function initializeDatabase() {
  // Called explicitly in index.js for clarity
  return db;
}

export default db;
