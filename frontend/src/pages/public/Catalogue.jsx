import { useState, useMemo, useEffect } from 'react';
import { Search, PackageX, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

// DATA STATIS KATEGORI
const DUMMY_CATEGORIES = [
  { id: '1', slug: 'bambu-hoki', name: 'Bambu Hoki' },
  { id: '2', slug: 'bonggol-suji', name: 'Bonggol Suji' },
  { id: '3', slug: 'tanaman-hias', name: 'Tanaman Hias' },
  { id: '4', slug: 'custom-anyaman', name: 'Custom Anyaman' },
];

// DATA STATIS PRODUK (16 ITEM AGAR PAGINATION AKTIF SETELAH 12 PRODUK)
const DUMMY_PRODUCTS = [
  {
    id: '1',
    name: 'Bambu Hoki Anyaman Guci 3 Tier (Grade A)',
    category_name: 'Bambu Hoki',
    category_slug: 'bambu-hoki',
    description: 'Rangkaian anyaman susun 3 membentuk guci simetris, berdaun hijau segar siap ekspor.',
    price_idr: 35000,
    price_usd: 2.30,
    market_scope: 'international',
    image_url: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    name: 'Bonggol Suji Export Grade (Panjang 25-30cm)',
    category_name: 'Bonggol Suji',
    category_slug: 'bonggol-suji',
    description: 'Bonggol kayu suji berkulit sehat dan perakaran kuat, siap kirim via kontainer laut.',
    price_idr: 12500,
    price_usd: 0.85,
    market_scope: 'international',
    image_url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    name: 'Bambu Hoki Lurus (Straight Lucky Bamboo 50cm)',
    category_name: 'Bambu Hoki',
    category_slug: 'bambu-hoki',
    description: 'Batang bambu hoki lurus pilihan tanpa cacat, cocok untuk dirangkai kembali.',
    price_idr: 8000,
    price_usd: 0.55,
    market_scope: 'national',
    image_url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    name: 'Custom Anyaman Nanas Bambu Hoki',
    category_name: 'Custom Anyaman',
    category_slug: 'custom-anyaman',
    description: 'Kerajinan bentuk nanas hoki unik karya pengrajin Sukabumi berpengalaman.',
    price_idr: 45000,
    price_usd: 3.00,
    market_scope: 'national',
    image_url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    name: 'Dracaena Sanderiana Variegata (Daun Hijau Putih)',
    category_name: 'Tanaman Hias',
    category_slug: 'tanaman-hias',
    description: 'Tanaman hias daun variegata tropis hasil budidaya kebun Sukabumi.',
    price_idr: 18000,
    price_usd: 1.20,
    market_scope: 'national',
    image_url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    name: 'Bonggol Suji Mini (Persiapan Ekspor Container)',
    category_name: 'Bonggol Suji',
    category_slug: 'bonggol-suji',
    description: 'Bonggol suji mini pilihan siap kemas kardus ekspor / kontainer pendingin.',
    price_idr: 9500,
    price_usd: 0.65,
    market_scope: 'international',
    image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '7',
    name: 'Bambu Hoki Spiral (Spiral Lucky Bamboo 60cm)',
    category_name: 'Bambu Hoki',
    category_slug: 'bambu-hoki',
    description: 'Batang bambu hoki terpilin spiral alami nan elegan untuk hiasan meja & ruangan.',
    price_idr: 27500,
    price_usd: 1.85,
    market_scope: 'international',
    image_url: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '8',
    name: 'Anyaman Menara Bambu Hoki 5 Layer',
    category_name: 'Custom Anyaman',
    category_slug: 'custom-anyaman',
    description: 'Rangkaian menara 5 tingkat mewah untuk dekorasi komersial dan fengshui.',
    price_idr: 85000,
    price_usd: 5.80,
    market_scope: 'international',
    image_url: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '9',
    name: 'Bambu Hoki Heart / Bentuk Hati 40cm',
    category_name: 'Custom Anyaman',
    category_slug: 'custom-anyaman',
    description: 'Rangkaian anyaman unik berbentuk hati cocok untuk hadiah & hiasan interior.',
    price_idr: 32000,
    price_usd: 2.15,
    market_scope: 'national',
    image_url: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '10',
    name: 'Bonggol Suji Jumbo Super (Diameter 5cm+)',
    category_name: 'Bonggol Suji',
    category_slug: 'bonggol-suji',
    description: 'Bonggol suji ukuran ekstra besar dengan ketahanan daya tumbuh sangat tinggi.',
    price_idr: 22000,
    price_usd: 1.50,
    market_scope: 'international',
    image_url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '11',
    name: 'Bambu Hoki Kepang 8 (Braid Lucky Bamboo)',
    category_name: 'Bambu Hoki',
    category_slug: 'bambu-hoki',
    description: 'Susunan kepang 8 batang bambu hoki simetris kualitas kontainer ekspor.',
    price_idr: 55000,
    price_usd: 3.75,
    market_scope: 'international',
    image_url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '12',
    name: 'Tanaman Hias Sansiviera Sukabumi Cultivar',
    category_name: 'Tanaman Hias',
    category_slug: 'tanaman-hias',
    description: 'Tanaman pemurni udara tahan panas hasil pembibitan lahan Sukabumi.',
    price_idr: 15000,
    price_usd: 1.00,
    market_scope: 'national',
    image_url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '13',
    name: 'Bambu Hoki Pot Keramik Exclusive',
    category_name: 'Bambu Hoki',
    category_slug: 'bambu-hoki',
    description: 'Paket bambu hoki siap pajang dengan pot keramik oriental berkualitas.',
    price_idr: 65000,
    price_usd: 4.40,
    market_scope: 'national',
    image_url: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '14',
    name: 'Bonggol Suji Siap Tanam Polybag',
    category_name: 'Bonggol Suji',
    category_slug: 'bonggol-suji',
    description: 'Bonggol suji yang sudah bertunas awal dalam polybag siap suplai lokal.',
    price_idr: 14000,
    price_usd: 0.95,
    market_scope: 'national',
    image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '15',
    name: 'Anyaman Bambu Hoki Model Mahkota',
    category_name: 'Custom Anyaman',
    category_slug: 'custom-anyaman',
    description: 'Rangkaian mahkota mewah khas pengrajin lokal untuk koleksi premium.',
    price_idr: 75000,
    price_usd: 5.10,
    market_scope: 'international',
    image_url: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '16',
    name: 'Bambu Hoki Mini Gift Box Edition',
    category_name: 'Bambu Hoki',
    category_slug: 'bambu-hoki',
    description: 'Bambu hoki mini dalam kemasan souvenir gift box ramah lingkungan.',
    price_idr: 25000,
    price_usd: 1.70,
    market_scope: 'national',
    image_url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
  },
];

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [marketScope, setMarketScope] = useState('');
  const [search, setSearch] = useState('');

  // Pagination State (Maksimal 12 Produk Per Halaman)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter Data Statis
  const filteredProducts = useMemo(() => {
    return DUMMY_PRODUCTS.filter((product) => {
      const matchSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        !selectedCategory || product.category_slug === selectedCategory;

      const matchScope =
        !marketScope || product.market_scope === marketScope;

      return matchSearch && matchCategory && matchScope;
    });
  }, [search, selectedCategory, marketScope]);

  // Reset ke halaman 1 saat pencarian / filter diubah
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, marketScope]);

  // Hitung total halaman
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Potong array data sesuai halaman aktif
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  return (
    <div className="bg-gray-50/60 pb-20 pt-28 min-h-screen font-sf">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Halaman */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase mb-2 block">
            — KATALOG RESMI
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0D0D0D] tracking-tight mb-2 sm:mb-3">
            E-Catalogue Produk
          </h1>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Temukan koleksi Bambu Hoki, Bonggol Suji, dan Tanaman Hias Unggulan kualitas ekspor PT Bambu Hoki.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 sm:mb-8 grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          
          {/* Kolom Pencarian */}
          <div className="relative md:col-span-2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari produk (contoh: Bambu Hoki, Suji)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs md:text-sm outline-none focus:bg-white focus:border-[#153e25] focus:ring-1 focus:ring-[#153e25] transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Filter Cakupan Pasar */}
          <div className="relative">
            <select
              value={marketScope}
              onChange={(e) => setMarketScope(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 py-2 sm:py-2.5 px-3 rounded-xl text-xs md:text-sm text-gray-700 outline-none focus:bg-white focus:border-[#153e25] focus:ring-1 focus:ring-[#153e25] transition-all cursor-pointer font-medium"
            >
              <option value="">Semua Pasar (Lokal & Ekspor)</option>
              <option value="national">Pasar Nasional (IDR)</option>
              <option value="international">Pasar Internasional (USD)</option>
            </select>
          </div>

          {/* Filter Kategori */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 py-2 sm:py-2.5 px-3 rounded-xl text-xs md:text-sm text-gray-700 outline-none focus:bg-white focus:border-[#153e25] focus:ring-1 focus:ring-[#153e25] transition-all cursor-pointer font-medium"
            >
              <option value="">Semua Kategori</option>
              {DUMMY_CATEGORIES.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Info Jumlah Hasil */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 text-xs text-gray-500 px-1">
          <span>Menampilkan <strong>{paginatedProducts.length}</strong> dari <strong>{filteredProducts.length}</strong> produk</span>
          {(search || selectedCategory || marketScope) && (
            <button
              onClick={() => { setSearch(''); setSelectedCategory(''); setMarketScope(''); }}
              className="text-emerald-700 font-semibold hover:underline"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Product Grid Area (Mobile: 2 Kolom, Desktop: 3-4 Kolom) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8 max-w-md mx-auto">
            <PackageX className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-800 mb-1">Produk Tidak Ditemukan</h3>
            <p className="text-xs text-gray-500 mb-4">
              Tidak ada produk yang sesuai dengan pencarian Anda.
            </p>
            <button
              onClick={() => { setSearch(''); setSelectedCategory(''); setMarketScope(''); }}
              className="px-5 py-2 bg-[#153e25] text-white rounded-full text-xs font-semibold hover:bg-[#0f2e1b] transition-all"
            >
              Tampilkan Semua Produk
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {paginatedProducts.map((p) => (
                <div
                  key={p.id}
                  className="group bg-white rounded-xl sm:rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Gambar & Badge */}
                  <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
                    <img
                      src={p.image_url}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Market Scope Badge */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                      <span className={`text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full uppercase tracking-wider shadow-sm ${
                        p.market_scope === 'international' 
                          ? 'bg-[#153e25] text-white' 
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      }`}>
                        {p.market_scope === 'international' ? 'International' : 'Nasional'}
                      </span>
                    </div>
                  </div>

                  {/* Info Produk */}
                  <div className="p-3 sm:p-5 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-0.5 sm:mb-1">
                        {p.category_name}
                      </span>
                      <h3 className="font-bold text-[#0D0D0D] text-xs sm:text-sm mb-1 line-clamp-2 group-hover:text-emerald-700 transition-colors leading-snug">
                        {p.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-2 leading-relaxed mb-2 sm:mb-4">
                        {p.description}
                      </p>
                    </div>

                    {/* Pricing & Footer Kartu */}
                    <div className="border-t border-gray-100 pt-2 sm:pt-3 flex items-center justify-between gap-1">
                      <div>
                        <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider">Harga Est.</p>
                        <p className="font-extrabold text-xs sm:text-sm text-[#0D0D0D]">
                          Rp {Number(p.price_idr).toLocaleString('id-ID')}
                        </p>
                        {p.price_usd > 0 && (
                          <p className="text-[10px] sm:text-[11px] font-mono text-emerald-700 font-semibold">
                            ${Number(p.price_usd).toFixed(2)} USD
                          </p>
                        )}
                      </div>

                      <a
                        href={`https://wa.me/6289688500606?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(p.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#153e25] hover:bg-[#0f2e1b] text-white p-2 sm:p-2.5 rounded-full transition-all shadow-sm active:scale-95 shrink-0"
                        title="Tanyakan via WhatsApp"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* NAVIGASI PAGINATION */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                {/* Tombol Previous */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  title="Halaman Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Nomor Halaman */}
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 text-xs font-semibold rounded-lg transition-all ${
                      currentPage === page
                        ? 'bg-[#153e25] text-white shadow-sm'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Tombol Next */}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  title="Halaman Selanjutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default Catalogue;