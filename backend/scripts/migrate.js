const mysql = require('mysql2/promise');
const { tableSchemas } = require('./schema');
require('dotenv').config();

async function migrate() {
  let connection;
  try {
    // 1. Buat koneksi tanpa database untuk memastikan DB terbuat
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || ''
    });

    const dbName = process.env.DB_NAME || 'db_bambuhoki';
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
    await connection.query(`USE \`${dbName}\`;`);

    console.log(`\x1b[36m[MIGRATION]\x1b[0m Database "${dbName}" siap.`);

    // 2. Buat seluruh tabel sesuai urutan schema
    for (const table of tableSchemas) {
      await connection.query(table.query);
      console.log(`\x1b[32m✔\x1b[0m Tabel \x1b[1m${table.name}\x1b[0m berhasil dibuat/diverifikasi.`);
    }

    console.log('\n\x1b[32m[SUCCESS]\x1b[0m Migrasi database selesai tanpa hambatan.');
  } catch (error) {
    console.error('\x1b[31m[ERROR]\x1b[0m Gagal melakukan migrasi:', error);
  } finally {
    if (connection) await connection.end();
  }
}

migrate();