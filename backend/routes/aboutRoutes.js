const express = require('express');
const router = express.Router();
const { getAboutInfo } = require('../controllers/aboutController');
const upload = require('../middlewares/uploadMiddleware');
const { verifyToken } = require('../middlewares/authMiddleware');
const { updateAboutInfo, createAboutInfo, deleteAboutInfo } = require('../controllers/aboutController');

// Public Route
router.get('/about', getAboutInfo);

// Authenticated Routes
router.put('/about', verifyToken, updateAboutInfo);
router.post('/about', verifyToken, createAboutInfo);
router.delete('/about', verifyToken, deleteAboutInfo);

