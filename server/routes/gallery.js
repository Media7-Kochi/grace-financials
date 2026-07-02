import { Router } from 'express';
import {
  getSettings,
  updateSettings,
  getPosts,
  createPost,
  updatePost,
  deletePost,
  uploadImage
} from '../controllers/galleryController.js';

const router = Router();

// Settings routes
router.get('/settings', getSettings);
router.post('/settings', updateSettings);

// Posts routes
router.get('/posts', getPosts);
router.post('/posts', createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

// Upload routes
router.post('/upload', uploadImage);

export default router;
