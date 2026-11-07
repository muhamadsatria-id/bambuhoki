const pool = require('../config/db');

function slugify(text) {
  return text.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

// === ARTIKEL ===
const getArticles = async (req, res) => {
  try {
    const [articles] = await pool.query('SELECT * FROM articles ORDER BY id DESC');
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil artikel.' });
  }
};

const createArticle = async (req, res) => {
  const { title, content, status } = req.body;
  const thumbnail = req.file ? `/uploads/${req.file.filename}` : (req.body.thumbnail || null);
  try {
    const slug = slugify(title) + '-' + Date.now();
    await pool.query(
      'INSERT INTO articles (title, slug, content, thumbnail, status) VALUES (?, ?, ?, ?, ?)',
      [title, slug, content, thumbnail, status || 'published']
    );
    res.status(201).json({ message: 'Artikel berhasil diterbitkan.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal membuat artikel.' });
  }
};

const deleteArticle = async (req, res) => {
  try {
    await pool.query('DELETE FROM articles WHERE id = ?', [req.params.id]);
    res.json({ message: 'Artikel berhasil dihapus.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus artikel.' });
  }
};

// === GALERI ===
const getGalleries = async (req, res) => {
  try {
    const [galleries] = await pool.query('SELECT * FROM galleries ORDER BY id DESC');
    res.json(galleries);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil galeri.' });
  }
};

const createGallery = async (req, res) => {
  const { title, category } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : req.body.image_url;
  try {
    await pool.query(
      'INSERT INTO galleries (title, image_url, category) VALUES (?, ?, ?)',
      [title, image_url, category || 'product']
    );
    res.status(201).json({ message: 'Foto galeri berhasil ditambahkan.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambah galeri.' });
  }
};

const deleteGallery = async (req, res) => {
  try {
    await pool.query('DELETE FROM galleries WHERE id = ?', [req.params.id]);
    res.json({ message: 'Item galeri dihapus.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus item galeri.' });
  }
};

// === KONTAK / PESAN ===
const sendContactMessage = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  try {
    await pool.query(
      'INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, subject, message]
    );
    res.status(201).json({ message: 'Pesan Anda berhasil dikirim. Terima kasih!' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengirim pesan.' });
  }
};

const getContactMessages = async (req, res) => {
  try {
    const [messages] = await pool.query('SELECT * FROM contact_messages ORDER BY id DESC');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil pesan.' });
  }
};

// === COMPANY SETTINGS ===
const getSettings = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT setting_key, setting_value FROM company_settings');
    const settings = {};
    rows.forEach(row => {
      settings[row.setting_key] = row.setting_value;
    });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil pengaturan.' });
  }
};

const updateSettings = async (req, res) => {
  const settings = req.body; // Key-Value pair object
  try {
    for (const [key, value] of Object.entries(settings)) {
      await pool.query(
        'INSERT INTO company_settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = ?',
        [key, value, value]
      );
    }
    res.json({ message: 'Pengaturan perusahaan berhasil diperbarui.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal memperbarui pengaturan.' });
  }
};

module.exports = {
  getArticles, createArticle, deleteArticle,
  getGalleries, createGallery, deleteGallery,
  sendContactMessage, getContactMessages,
  getSettings, updateSettings
};