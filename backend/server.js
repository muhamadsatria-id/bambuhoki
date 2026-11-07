const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const contentRoutes = require('./routes/contentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve File Upload Statis
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Register Routes
app.use('/api/auth', authRoutes);
app.use('/api', productRoutes);
app.use('/api', contentRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Online', company: 'PT Bambu Hoki API System' });
});

app.listen(PORT, () => {
  console.log(`\x1b[32m✔\x1b[0m Backend API Server berjalan di http://localhost:${PORT}`);
});