const pool = require('../config/db');
const bcrypt = require('bcryptjs');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

async function seed() {
  try {
    console.log('\x1b[36m[SEEDER]\x1b[0m Memulai pengisian data awal (seeding)...');

    // 1. Admin Default
    const defaultEmail = 'admin@bambuhoki.com';
    const defaultPassword = 'password123';
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    const [existingAdmin] = await pool.query('SELECT * FROM users WHERE email = ?', [defaultEmail]);
    if (existingAdmin.length === 0) {
      await pool.query(
        'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
        ['Administrator PT Bambu Hoki', defaultEmail, hashedPassword, 'superadmin']
      );
      console.log(`\x1b[32m✔\x1b[0m User Admin dibuat (${defaultEmail} / ${defaultPassword})`);
    } else {
      console.log(`\x1b[33m!\x1b[0m User Admin (${defaultEmail}) sudah ada.`);
    }

    // 2. Categories
    const categoriesData = [
      'Bambu Hoki & Suji (Dracaena)',
      'Tanaman Hias Indoor',
      'Tanaman Outdoor & Lanskap',
      'Bibit & Suplai Ekspor'
    ];

    const categoryIds = [];
    for (const catName of categoriesData) {
      const slug = slugify(catName);
      const [res] = await pool.query(
        'INSERT INTO categories (name, slug) VALUES (?, ?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)',
        [catName, slug]
      );
      categoryIds.push(res.insertId);
    }
    console.log(`\x1b[32m✔\x1b[0m ${categoryIds.length} Kategori berhasil dibuat.`);

    // 3. Products Dummy Data (Realistis PT Bambu Hoki)
    const productsData = [
      {
        catIndex: 0,
        name: 'Bambu Hoki Menara 3 Tingkat (Lucky Bamboo Tower)',
        desc: 'Rangkaian Dracaena sanderiana bentuk menara 3 tingkat bertuah penarik rezeki. Cocok untuk interior kantor dan rumah.',
        idr: 150000,
        usd: 12.50,
        scope: 'both',
        img: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&auto=format&fit=crop'
      },
      {
        catIndex: 0,
        name: 'Bambu Hoki Anyaman Spiral (Spiral Dracaena Stem)',
        desc: 'Batang Bambu Hoki yang dibentuk spiral secara alami dengan pencahayaan khusus. Komoditas favorit pasar ekspor Asia & Eropa.',
        idr: 85000,
        usd: 7.00,
        scope: 'international',
        img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop'
      },
      {
        catIndex: 0,
        name: 'Tanaman Suji Hijau Variegata (Dracaena Fragrans)',
        desc: 'Daun Suji rimbun bergaris kuning-hijau segar. Efektif melembabkan dan menyaring polutan udara ruangan.',
        idr: 65000,
        usd: 5.50,
        scope: 'national',
        img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&auto=format&fit=crop'
      },
      {
        catIndex: 1,
        name: 'Monstera Deliciosa King Size',
        desc: 'Monstera berdaun lebar dengan pecah alami sempurna. Siap menghias sudut ruangan minimalis.',
        idr: 250000,
        usd: 20.00,
        scope: 'both',
        img: 'https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?w=600&auto=format&fit=crop'
      },
      {
        catIndex: 1,
        name: 'Calathea Orbifolia Pot Terakota',
        desc: 'Tanaman hias indoor dengan garis serat daun artistik murni perkebunan lokal Sukabumi.',
        idr: 120000,
        usd: 9.50,
        scope: 'national',
        img: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop'
      },
      {
        catIndex: 2,
        name: 'Ketapang Kencana Variegata (Landscape Tree)',
        desc: 'Pohon pelindung bersusun bertingkat untuk area pertamanan & kompleks komersial.',
        idr: 750000,
        usd: 55.00,
        scope: 'national',
        img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop'
      },
      {
        catIndex: 3,
        name: 'Bonggol Suji Unrooted Cut-Stem (Export Grade)',
        desc: 'Bonggol mentah Dracaena potong tanpa akar standar karantina ekspor kontainer laut & udara.',
        idr: 35000,
        usd: 2.80,
        scope: 'international',
        img: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&auto=format&fit=crop'
      }
    ];

    for (const prod of productsData) {
      const slug = slugify(prod.name);
      const catId = categoryIds[prod.catIndex] || categoryIds[0];
      await pool.query(
        `INSERT INTO products 
        (category_id, name, slug, description, price_idr, price_usd, market_scope, image_url, is_active) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)`,
        [catId, prod.name, slug, prod.desc, prod.idr, prod.usd, prod.scope, prod.img]
      );
    }
    console.log(`\x1b[32m✔\x1b[0m ${productsData.length} Produk awal berhasil dimasukkan.`);

    // 4. Articles
    const articlesData = [
      {
        title: 'Panduan Merawat Bambu Hoki Media Air Agar Selalu Segar',
        content: 'Bambu Hoki (Dracaena sanderiana) sangat adaptif ditanam dengan media air. Pastikan mengisinya dengan air bersih bebas kaporit dan ganti air secara berkala 1-2 minggu sekali.',
        img: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&auto=format&fit=crop'
      },
      {
        title: 'Standar Karantina Ekspor Tanaman Suji ke Pasar Internasional',
        content: 'PT Bambu Hoki memenuhi standar Sanitasi dan Fitosanitari (SPS) internasional dalam pengiriman bibit tanaman suji ke Timur Tengah dan Asia Timur.',
        img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop'
      }
    ];

    for (const art of articlesData) {
      await pool.query(
        'INSERT INTO articles (title, slug, content, thumbnail, status) VALUES (?, ?, ?, ?, ?)',
        [art.title, slugify(art.title), art.content, art.img, 'published']
      );
    }
    console.log(`\x1b[32m✔\x1b[0m ${articlesData.length} Artikel berhasil diseed.`);

    // 5. Galleries
    const galleryData = [
      { title: 'Perkebunan Induk Bambu Hoki', url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600', cat: 'facility' },
      { title: 'Proses Packaging Ekspor Kontainer', url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600', cat: 'export' },
      { title: 'Pameran Florikultura Nasional', url: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600', cat: 'event' }
    ];

    for (const gal of galleryData) {
      await pool.query(
        'INSERT INTO galleries (title, image_url, category) VALUES (?, ?, ?)',
        [gal.title, gal.url, gal.cat]
      );
    }
    console.log(`\x1b[32m✔\x1b[0m ${galleryData.length} Foto Galeri dibuat.`);

    // 6. Company Settings
    const settings = [
      ['company_name', 'PT Bambu Hoki'],
      ['tagline', 'Produsen & Eksportir Utama Bambu Hoki, Suji, dan Tanaman Hias Premium'],
      ['address', 'Sukabumi, Jawa Barat, Indonesia'],
      ['phone', '+62 812-3456-7890'],
      ['email', 'info@bambuhoki.com'],
      ['about_us', 'PT Bambu Hoki adalah perusahaan agribisnis dan florikultura terdepan yang berfokus pada budidaya, perangkaian, dan distribusi tanaman Bambu Hoki (Dracaena), Suji, serta berbagai jenis tanaman hias kualitas unggul untuk pasar nasional maupun ekspor internasional.']
    ];

    for (const [key, val] of settings) {
      await pool.query(
        'INSERT INTO company_settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = ?',
        [key, val, val]
      );
    }
    console.log('\x1b[32m✔\x1b[0m Setting Perusahaan berhasil dikonfigurasi.');

    console.log('\n\x1b[32m[SUCCESS]\x1b[0m Proses seeding selesai sempurna!');
    process.exit(0);
  } catch (error) {
    console.error('\x1b[31m[ERROR]\x1b[0m Gagal melakukan seeding:', error);
    process.exit(1);
  }
}

seed();