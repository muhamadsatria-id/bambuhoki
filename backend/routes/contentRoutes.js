const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const { verifyToken } = require('../middlewares/authMiddleware');
const {
  getArticles, createArticle, deleteArticle,
  getGalleries, createGallery, deleteGallery,
  sendContactMessage, getContactMessages,
  getSettings, updateSettings
} = require('../controllers/contentController');

// Public Routes
router.get('/articles', getArticles);
router.get('/galleries', getGalleries);
router.get('/settings', getSettings);
router.post('/contact', sendContactMessage);

// Protected Admin Routes
router.post('/articles', verifyToken, upload.single('thumbnail'), createArticle);
router.delete('/articles/:id', verifyToken, deleteArticle);

router.post('/galleries', verifyToken, upload.single('image'), createGallery);
router.delete('/galleries/:id', verifyToken, deleteGallery);

router.get('/contact-messages', verifyToken, getContactMessages);
router.put('/settings', verifyToken, updateSettings);

module.exports = router;