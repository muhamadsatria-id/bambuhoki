const mysql = require('mysql2/promise');
const { dropTablesQuery } = require('./schema');
const { exec } = require('child_process');
const path = require('path');
require('dotenv').config();

async function fresh() {
  let connection;
  try {
    console.log('\x1b[35m[MIGRATE FRESH]\x1b[0m Menghapus seluruh tabel di database...');

    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'db_bambuhoki',
      multipleStatements: true
    });

    // 1. Drop All Tables
    await connection.query(dropTablesQuery);
    console.log('\x1b[32m✔\x1b[0m Seluruh tabel lama berhasil dihapus.');
    await connection.end();

    // 2. Jalankan migrate & seed secara serial
    console.log('\x1b[36m[MIGRATE FRESH]\x1b[0m Menjalankan ulang migration & seeder...\n');

    const migratePath = path.join(__dirname, 'migrate.js');
    const seedPath = path.join(__dirname, 'seed.js');

    exec(`node "${migratePath}" && node "${seedPath}"`, (err, stdout, stderr) => {
      if (err) {
        console.error('\x1b[31m[ERROR]\x1b[0m Eksekusi fresh gagal:', stderr || err.message);
        return;
      }
      console.log(stdout);
      console.log('\x1b[32m[SUCCESS]\x1b[0m Database di-reset & di-seed dengan sukses!');
    });

  } catch (error) {
    console.error('\x1b[31m[ERROR]\x1b[0m Gagal reset database:', error);
    if (connection) await connection.end();
  }
}

fresh();