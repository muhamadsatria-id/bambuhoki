Berikut adalah dokumen panduan desain dan sistem UI/UX (`css.md`) yang dibuat berdasarkan referensi gambar visual. Panduan ini memuat aturan token desain, typography, skema warna, serta panduan implementasi menggunakan Tailwind CSS untuk React.

---

# Design System & Styling Guidelines (`css.md`)

Dokumen ini berisi spesifikasi visual, tokens, aturan komponen, dan panduan Tailwind CSS yang diturunkan langsung dari desain Landing Page modern berciri khas minimalis, profesional, dan bersih.

---

## 1. Design Tokens & Color Palette

### Base & Brand Colors

* **Primary Red (Accent)**: `#E60000` atau `bg-red-600`


* Digunakan untuk tombol utama (CTA), ikon aksen grafis, serta highlight teks/badge.




* **Dark / Black (Primary Text & Dark BG)**: `#111111` / `#0D0D0D`


* Digunakan untuk *footer*, *badge* kategori hitam, tombol sekunder, dan warna teks judul utama.




* **Off-White / Background Base**: `#FFFFFF` dan `#F8F9FA` (`bg-slate-50`)


* Digunakan untuk background section, kartu UI, dan floating navbar.




* **Gray Spectrum (Text & Card Borders)**:
* `text-gray-900` (`#18181B`): Sub-heading dan teks dominan.


* `text-gray-600` (`#52525B`): Paragraf deskripsi dan teks penjelas.


* `border-gray-200` (`#E4E4E7`): Border pembatas kartu.





---

## 2. Typography Rules (Apple SF Pro Style)

Menggunakan font family **SF Pro** / System Font dengan struktur ketebalan (*font weight*) yang kontras tinggi:

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif;

```

### Hierarchy Scale

| Role | Tailwind Class | Style Notes |
| --- | --- | --- |
| **Hero Title** | `text-5xl lg:text-6xl font-bold tracking-tight text-white` | Ukuran sangat besar, padat, dan menonjol

 |
| **Section Title** | `text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight` | Digunakan pada judul tiap section

 |
| **Card Title** | `text-lg lg:text-xl font-bold text-gray-900 leading-snug` | Teks judul kartu berita/event

 |
| **Body Text** | `text-sm lg:text-base text-gray-600 leading-relaxed font-normal` | Jarak antar baris cukup renggang

 |
| **Badge / Date** | `text-xs font-semibold uppercase tracking-wider text-gray-500` | Keterangan tanggal & kategori

 |

---

## 3. Visual Styling Rules & Components

### A. Rounded Corners (Radius)

* **Navbar Floating Container**: `rounded-full` (Membulat penuh).


* **Feature & Content Cards**: `rounded-2xl` sampai `rounded-3xl` (Sudut membulat modern khas desain terkini).


* **CTA Buttons**: `rounded-full` (Selalu berbentuk kapsul).



### B. Floating Navbar Header

* Positioning: `fixed top-4 left-0 right-0 z-50`.


* Visual: Outer padding, background putih dengan `shadow-md` dan `border border-gray-100`.


* Alignment: `flex items-center justify-between px-6 py-3`.



### C. Red CTA Pill Buttons (Aksen Utama)

* Style: `bg-[#E60000] hover:bg-red-700 text-white font-semibold rounded-full px-6 py-3 flex items-center justify-center gap-2 transition-all`.


* Ciri khas: Sering dipadukan dengan ikon lingkaran kecil atau tanda panah kanan (`ArrowRight` / `ChevronRight`).



### D. Media & Images Styling

* Aspek rasio gambar pada kartu: `aspect-[4/3]` atau `aspect-[16/9]`.


* Efek hover: `overflow-hidden` pada container gambar, dengan gambar yang perbesar halus saat hover (`group-hover:scale-105 transition-transform duration-300`).



---

## 4. React Tailwind Utility Setup (Tailwind Config)

Tambahkan konfigurasi berikut ke `tailwind.config.js` Anda agar sesuai dengan token desain visual:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E60000",
          dark: "#111111",
          gray: "#F8F9FA",
        },
      },
      fontFamily: {
        sf: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};

```

---

## 5. Referensi Kode Komponen Section (React Snippets)

### Section 1: Hero Section dengan Overlay Gelap & Teks Putih

```jsx
export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] rounded-b-[2.5rem] overflow-hidden flex items-center bg-gray-900 font-sf">
      {/* Background Image dengan Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight max-w-2xl leading-[1.1]">
          Breakthrough <br />
          <span className="text-white">in the Basel Area</span>
        </h1>
        <p className="mt-6 text-lg text-gray-200 max-w-xl font-normal leading-relaxed">
          We help companies, entrepreneurs and researchers grow and innovate in the Basel Area, Switzerland’s most dynamic region.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <button className="bg-[#E60000] hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-red-600/30">
            <span>Find out how</span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

```

### Section 2: 3-Column Feature Cards (Ready to Grow)

```jsx
export const FeatureCards = () => {
  const cards = [
    { title: 'Land', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab' },
    { title: 'Launch', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998' },
    { title: 'Level up', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f' },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 font-sf">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          Ready to grow?<br />We're ready to go
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-6 left-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

```

### Section 3: Upcoming Events Section (Grid Cards dengan Tanggal)

```jsx
export const EventsSection = () => {
  const events = [
    {
      day: '19',
      month: 'SEP',
      title: 'Day One 2026 Challenge Programme',
      tag: 'Public Event',
    },
    {
      day: '8',
      month: 'OCT',
      title: 'Therapeutics Day',
      tag: 'Conference',
    },
    {
      day: '10',
      month: 'NOV',
      title: 'AI in Health 2026',
      tag: 'Online Event',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 rounded-3xl max-w-7xl mx-auto px-6 font-sf my-10">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Upcoming events</h2>
        <button className="bg-black text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-gray-800 transition">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((evt, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between p-5">
            <div className="h-40 bg-slate-200 rounded-xl mb-4 relative overflow-hidden">
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md rounded-xl p-2.5 text-center min-w-[55px] shadow-sm">
                <span className="block text-xl font-bold text-gray-900 leading-none">{evt.day}</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase">{evt.month}</span>
              </div>
            </div>
            <div>
              <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">{evt.tag}</span>
              <h3 className="text-base font-bold text-gray-900 mt-1 leading-snug hover:text-red-600 cursor-pointer transition">
                {evt.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

```

### Section 4: Footer Hitam Pekat

```jsx
export const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-16 pb-12 font-sf">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-12">
        <div className="col-span-2">
          <h3 className="text-lg font-bold mb-3">Want to know more?</h3>
          <p className="text-xs text-gray-400 max-w-sm mb-6">
            Get in touch with us to explore business opportunities.
          </p>
          <button className="bg-[#E60000] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-red-700 transition">
            Contact us →
          </button>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Offer</h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li><a href="#" className="hover:text-white transition">Land & Expand</a></li>
            <li><a href="#" className="hover:text-white transition">Innovation Initiatives</a></li>
            <li><a href="#" className="hover:text-white transition">Sites</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">About</h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li><a href="#" className="hover:text-white transition">Basel Area</a></li>
            <li><a href="#" className="hover:text-white transition">About us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Insights</h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li><a href="#" className="hover:text-white transition">News</a></li>
            <li><a href="#" className="hover:text-white transition">Stories</a></li>
            <li><a href="#" className="hover:text-white transition">Events</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col md:flex-row justify-between text-[11px] text-gray-500">
        <p>© 2026 PT Bambu Hoki / Basel Area. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gray-400">Imprint</a>
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

```