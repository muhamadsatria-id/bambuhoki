import { useState, useEffect } from 'react';
import API from '../../services/api';
import { Search, Globe, Filter } from 'lucide-react';

const Catalogue = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [marketScope, setMarketScope] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, marketScope, search]);

  const fetchCategories = async () => {
    try {
      const res = await API.get('/categories');
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = {};
      if (selectedCategory) params.category = selectedCategory;
      if (marketScope) params.scope = marketScope;
      if (search) params.search = search;

      const res = await API.get('/products', { params });
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 pb-12 pt-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">E-Catalogue Produk</h1>
          <p className="text-sm text-gray-600">Temukan koleksi Bambu Hoki, Suji, dan Tanaman Hias Unggulan PT Bambu Hoki</p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Search */}
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Market Filter */}
          <select
            value={marketScope}
            onChange={(e) => setMarketScope(e.target.value)}
            className="border p-2 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Semua Pasar (Lokal & Ekspor)</option>
            <option value="national">Pasar Nasional (IDR)</option>
            <option value="international">Pasar Internasional (USD)</option>
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Semua Kategori</option>
            {categories.map((c) => (
              <option key={c.id} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="text-center py-16 text-gray-500">Memuat katalog produk...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-16 text-gray-400">Tidak ada produk yang sesuai dengan filter.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
                <img
                  src={p.image_url?.startsWith('/uploads') ? `http://localhost:5000${p.image_url}` : p.image_url}
                  alt={p.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{p.category_name}</span>
                  <h3 className="font-bold text-gray-900 text-sm mt-1 mb-2 line-clamp-1">{p.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3">{p.description}</p>
                  <div className="flex items-center justify-between border-t pt-3">
                    <div>
                      <p className="text-xs text-gray-400">Harga Est.</p>
                      <p className="font-bold text-sm text-emerald-800">
                        Rp {Number(p.price_idr).toLocaleString('id-ID')}
                      </p>
                      <p className="text-[11px] font-mono text-gray-500">${Number(p.price_usd).toFixed(2)} USD</p>
                    </div>
                    <span className="text-[9px] font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded border uppercase">
                      {p.market_scope}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogue;