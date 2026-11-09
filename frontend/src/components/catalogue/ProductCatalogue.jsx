import { useState, useMemo } from 'react';
import CtaBreadcrumb from './CtaBreadcrumb';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import { PackageX } from 'lucide-react';

// Data Dummy Produk PT Bambu Hoki Sukabumi
const DUMMY_PRODUCTS = [
  {
    id: '1',
    title: 'Bambu Hoki Anyaman Guci 3 Tier (Grade A)',
    category: 'Bambu Hoki',
    description: 'Anyaman susun 3 membentuk struktur guci simetris, berdaun segar siap ekspor.',
    price: 35000,
    unit: 'pot',
    badge: 'Terlaris',
    exportGrade: true,
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80',
    popularity: 98,
  },
  {
    id: '2',
    title: 'Bonggol Suji Export Grade (Panjang 20-30cm)',
    category: 'Bonggol Suji',
    description: 'Bonggol kayu suji segar berkulit sehat dan perakaran kuat untuk pembibitan ulang.',
    price: 12500,
    unit: 'batang',
    badge: 'Ekspor',
    exportGrade: true,
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80',
    popularity: 90,
  },
  {
    id: '3',
    title: 'Bambu Hoki Lurus (Straight Lucky Bamboo 50cm)',
    category: 'Bambu Hoki',
    description: 'Batang bambu hoki lurus pilihan tanpa cacat, cocok untuk dirangkai ulang.',
    price: 8000,
    unit: 'batang',
    badge: 'Grosir',
    exportGrade: true,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
    popularity: 85,
  },
  {
    id: '4',
    title: 'Custom Anyaman Nanas Bambu Hoki',
    category: 'Custom Anyaman',
    description: 'Bentuk nanas hoki unik karya pengrajin Sukabumi berpengalaman.',
    price: 45000,
    unit: 'pot',
    badge: 'Limited',
    exportGrade: false,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    popularity: 78,
  },
  {
    id: '5',
    title: 'Dracaena Sanderiana Variegata (Daun Hijau Putih)',
    category: 'Tanaman Hias',
    description: 'Tanaman hias daun variegata tropis hasil budidaya kebun Sukabumi.',
    price: 18000,
    unit: 'pot',
    badge: 'Baru',
    exportGrade: true,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    popularity: 70,
  },
  {
    id: '6',
    title: 'Bonggol Suji Mini (Persiapan Ekspor Container)',
    category: 'Bonggol Suji',
    description: 'Bonggol suji siap kemas kardus ekspor/kontainer pendingin.',
    price: 9500,
    unit: 'batang',
    badge: 'Bulk Order',
    exportGrade: true,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    popularity: 92,
  },
  {
    id: '7',
    title: 'Bambu Hoki Spiral (Spiral Lucky Bamboo 60cm)',
    category: 'Bambu Hoki',
    description: 'Batang bambu hoki terpilin spiral alami nan elegan.',
    price: 27500,
    unit: 'batang',
    badge: 'Favorit',
    exportGrade: true,
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80',
    popularity: 95,
  },
  {
    id: '8',
    title: 'Anyaman Menara Bambu Hoki 5 Layer',
    category: 'Custom Anyaman',
    description: 'Rangkaian menara 5 tingkat mewah untuk dekorasi komersial dan fengshui.',
    price: 85000,
    unit: 'set',
    badge: 'Premium',
    exportGrade: true,
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
    popularity: 88,
  },
];

const CATEGORIES = ['Semua', 'Bambu Hoki', 'Bonggol Suji', 'Tanaman Hias', 'Custom Anyaman'];

const ProductCatalogue = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [sortBy, setSortBy] = useState('populer');

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return DUMMY_PRODUCTS.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'harga-rendah') return a.price - b.price;
      if (sortBy === 'harga-tinggi') return b.price - a.price;
      if (sortBy === 'populer') return b.popularity - a.popularity;
      return b.id - a.id;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 font-sf">
      {/* 1. Header & Breadcrumb Banner */}
      <CtaBreadcrumb category={selectedCategory} />

      {/* 2. Sticky Search & Filter Bar */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        categories={CATEGORIES}
      />

      {/* 3. Main Product Grid Container */}
      <main className="max-w-7xl mx-auto px-6 pt-8">
        
        {/* Results Counter Info */}
        <div className="flex items-center justify-between mb-6 text-xs text-gray-500">
          <span>Menampilkan <strong>{filteredProducts.length}</strong> produk</span>
          {selectedCategory !== 'Semua' && (
            <button
              onClick={() => { setSelectedCategory('Semua'); setSearchQuery(''); }}
              className="text-emerald-700 font-semibold hover:underline"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center bg-white rounded-3xl border border-gray-100 p-8 max-w-md mx-auto">
            <PackageX className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-800 mb-1">Produk Tidak Ditemukan</h3>
            <p className="text-xs text-gray-500 mb-4">
              Coba gunakan kata kunci lain atau pilih kategori yang berbeda.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
              className="px-5 py-2 bg-[#153e25] text-white rounded-full text-xs font-semibold hover:bg-[#0f2e1b] transition-all"
            >
              Tampilkan Semua Produk
            </button>
          </div>
        )}

      </main>
    </div>
  );
};

export default ProductCatalogue;