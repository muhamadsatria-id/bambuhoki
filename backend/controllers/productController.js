const pool = require('../config/db');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

// === PUBLIC ENDPOINTS ===

// Get All Products (Filter by Category, Market Scope, Search)
const getProducts = async (req, res) => {
  const { category, scope, search } = req.query;
  try {
    let query = `
      SELECT p.*, c.name AS category_name, c.slug AS category_slug 
      FROM products p 
      JOIN categories c ON p.category_id = c.id 
      WHERE p.is_active = 1
    `;
    const params = [];

    if (category) {
      query += ` AND c.slug = ?`;
      params.push(category);
    }
    if (scope && ['national', 'international'].includes(scope)) {
      query += ` AND (p.market_scope = ? OR p.market_scope = 'both')`;
      params.push(scope);
    }
    if (search) {
      query += ` AND (p.name LIKE ? OR p.description LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`);
    }

    query += ` ORDER BY p.id DESC`;

    const [products] = await pool.query(query, params);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data produk.', error: error.message });
  }
};

// Get Single Product by Slug
const getProductBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const [products] = await pool.query(
      `SELECT p.*, c.name AS category_name FROM products p JOIN categories c ON p.category_id = c.id WHERE p.slug = ?`,
      [slug]
    );
    if (products.length === 0) {
      return res.status(404).json({ message: 'Produk tidak ditemukan.' });
    }
    res.json(products[0]);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil detail produk.' });
  }
};

// Get All Categories
const getCategories = async (req, res) => {
  try {
    const [categories] = await pool.query('SELECT * FROM categories ORDER BY name ASC');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil kategori.' });
  }
};

// === ADMIN PROTECTED ENDPOINTS ===

// Create Product
const createProduct = async (req, res) => {
  const { category_id, name, description, price_idr, price_usd, market_scope } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : (req.body.image_url || null);

  try {
    const slug = slugify(name) + '-' + Date.now();
    await pool.query(
      `INSERT INTO products (category_id, name, slug, description, price_idr, price_usd, market_scope, image_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [category_id, name, slug, description, price_idr || 0, price_usd || 0, market_scope || 'both', image_url]
    );
    res.status(201).json({ message: 'Produk berhasil ditambahkan.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambahkan produk.', error: error.message });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { category_id, name, description, price_idr, price_usd, market_scope, is_active } = req.body;

  try {
    let query = `UPDATE products SET category_id=?, name=?, description=?, price_idr=?, price_usd=?, market_scope=?, is_active=?`;
    const params = [category_id, name, description, price_idr, price_usd, market_scope, is_active ?? 1];

    if (req.file) {
      query += `, image_url=?`;
      params.push(`/uploads/${req.file.filename}`);
    }

    query += ` WHERE id=?`;
    params.push(id);

    await pool.query(query, params);
    res.json({ message: 'Produk berhasil diperbarui.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal memperbarui produk.' });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM products WHERE id = ?', [id]);
    res.json({ message: 'Produk berhasil dihapus.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus produk.' });
  }
};

module.exports = { getProducts, getProductBySlug, getCategories, createProduct, updateProduct, deleteProduct };