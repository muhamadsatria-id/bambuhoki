# PT Bambu Hoki

Website profil perusahaan, e-catalogue, dan CMS admin untuk **PT Bambu Hoki** — produsen & eksportir Bambu Hoki, Suji, dan tanaman hias dari Sukabumi.

Repo berisi dua paket terpisah (tanpa root workspace):

- `backend/` — REST API Express 5 + MySQL (CommonJS)
- `frontend/` — SPA Vite 8 + React 19 + Tailwind CSS 4 (ESM)

## Prasyarat

- Node.js 20.19+ (disarankan 22 LTS atau lebih baru)
- MySQL 8 atau MariaDB yang kompatibel

## Setup Backend

```bash
cd backend
npm install
cp .env.example .env    # sesuaikan kredensial DB & JWT_SECRET
npm run migrate
npm run seed
npm run dev             # http://localhost:5000
```

Seed membuat akun admin default:

- Email: `admin@bambuhoki.com`
- Password: `password123`

> `npm run migrate:fresh` menghapus **seluruh tabel** lalu migrate + seed ulang. Hanya untuk development.

## Setup Frontend

```bash
cd frontend
npm install
npm run dev             # http://localhost:3000
```

Build produksi: `npm run build` (output di `frontend/dist/`). Lint: `npm run lint`.

## Catatan

- Frontend memanggil API langsung ke `http://localhost:5000/api` (lihat `frontend/src/services/api.js`), jadi backend harus berjalan saat development.
- Route publik yang aktif saat ini hanya `/` dan `/catalogue`. Beberapa link navigasi (about, gallery, articles, contact) belum terdaftar di router.
- Konfigurasi rahasia hanya ada di `backend/.env` dan tidak ikut ter-commit.

## Push ke GitHub (manual)

Repo sudah di-`git init` tetapi belum punya commit. `.gitignore` sudah mengecualikan `node_modules/`, `frontend/dist/`, `backend/uploads/*`, semua file `.env`, dan `AGENTS.md` (instruksi agent lokal).

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

Sebelum commit, pastikan `backend/.env` **tidak** muncul di `git status`.
