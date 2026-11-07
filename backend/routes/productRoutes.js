const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const { verifyToken } = require('../middlewares/authMiddleware');
const {
  getProducts,
  getProductBySlug,
  getCategories,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Public Routes
router.get('/products', getProducts);
router.get('/products/:slug', getProductBySlug);
router.get('/categories', getCategories);

// Protected Admin Routes
router.post('/products', verifyToken, upload.single('image'), createProduct);
router.put('/products/:id', verifyToken, upload.single('image'), updateProduct);
router.delete('/products/:id', verifyToken, deleteProduct);

module.exports = router;