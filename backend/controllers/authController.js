const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 1. Login Admin
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email dan password wajib diisi.' });
    }

    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(401).json({ message: 'Email atau password salah.' });
    }

    const user = users[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email atau password salah.' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role, name: user.name },
      process.env.JWT_SECRET || 'super_secret_key_bambuhoki_2026',
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login berhasil.',
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server.', error: error.message });
  }
};

// 2. Cek Profile Admin Aktif
const getMe = async (req, res) => {
  try {
    const [users] = await pool.query('SELECT id, name, email, role, created_at FROM users WHERE id = ?', [req.user.id]);
    if (users.length === 0) {
      return res.status(404).json({ message: 'User tidak ditemukan.' });
    }
    res.json(users[0]);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server.' });
  }
};

// 3. Get All Users (Management User Admin)
const getAllUsers = async (req, res) => {
  try {
    const [users] = await pool.query('SELECT id, name, email, role, created_at FROM users ORDER BY id DESC');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data user.' });
  }
};

// 4. Create New Admin User
const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password || 'password123', 10);
    await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, role || 'admin']
    );
    res.status(201).json({ message: 'User admin baru berhasil ditambahkan.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambah user.', error: error.message });
  }
};

// 5. Delete Admin User
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (parseInt(id) === req.user.id) {
      return res.status(400).json({ message: 'Tidak dapat menghapus akun diri sendiri.' });
    }
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
    res.json({ message: 'User berhasil dihapus.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus user.' });
  }
};

module.exports = { login, getMe, getAllUsers, createUser, deleteUser };