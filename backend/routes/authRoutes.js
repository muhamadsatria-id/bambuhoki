const express = require('express');
const router = express.Router();
const { login, getMe, getAllUsers, createUser, deleteUser } = require('../controllers/authController');
const { verifyToken } = require('../middlewares/authMiddleware');

// Public Route
router.post('/login', login);

// Protected Admin Routes
router.get('/me', verifyToken, getMe);
router.get('/users', verifyToken, getAllUsers);
router.post('/users', verifyToken, createUser);
router.delete('/users/:id', verifyToken, deleteUser);

module.exports = router;