import { useState, useEffect } from 'react';
import API from '../../services/api';
import { Plus, Trash2, Edit, Package, Globe, Image as ImageIcon } from 'lucide-react';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form State
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    category_id: '',
    name: '',
    description: '',
    price_idr: '',
    price_usd: '',
    market_scope: 'both',
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [resProd, resCat] = await Promise.all([
        API.get('/products'),
        API.get('/categories')
      ]);
      setProducts(resProd.data);
      setCategories(resCat.data);
      if (resCat.data.length > 0) {
        setFormData(prev => ({ ...prev, category_id: resCat.data[0].id }));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (imageFile) data.append('image', imageFile);

    try {
      await API.post('/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setShowModal(false);
      setImageFile(null);
      setFormData({
        category_id: categories[0]?.id || '',
        name: '',
        description: '',
        price_idr: '',
        price_usd: '',
        market_scope: 'both'
      });
      fetchData();
    } catch (err) {
      alert(err.response?.data?.message || 'Gagal menyimpan produk.');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Yakin ingin menghapus produk ini?')) return;
    try {
      await API.delete(`/products/${id}`);
      fetchData();
    } catch (err) {
      alert('Gagal menghapus produk.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm border">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Manajemen Katalog Produk</h2>
          <p className="text-xs text-gray-500">Kelola item produk suji, bambu hoki, dan tanaman ekspor/nasional</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm px-4 py-2.5 rounded-lg font-medium transition shadow-sm"
        >
          <Plus size={18} /> Tambah Produk Baru
        </button>
      </div>

      {/* Tabel Data Produk */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b text-xs font-semibold uppercase text-gray-600">
            <tr>
              <th className="px-6 py-4">Gambar</th>
              <th className="px-6 py-4">Nama Produk</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4">Harga (IDR / USD)</th>
              <th className="px-6 py-4">Cakupan Pasar</th>
              <th className="px-6 py-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-700">
            {loading ? (
              <tr><td colSpan="6" className="text-center py-6">Loading data...</td></tr>
            ) : products.length === 0 ? (
              <tr><td colSpan="6" className="text-center py-6 text-gray-400">Belum ada produk.</td></tr>
            ) : (
              products.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-3">
                    <img
                      src={p.image_url?.startsWith('/uploads') ? `http://localhost:5000${p.image_url}` : p.image_url}
                      alt={p.name}
                      className="w-12 h-12 object-cover rounded-md border"
                    />
                  </td>
                  <td className="px-6 py-3 font-semibold text-gray-900">{p.name}</td>
                  <td className="px-6 py-3">{p.category_name}</td>
                  <td className="px-6 py-3 font-mono text-xs">
                    Rp {Number(p.price_idr).toLocaleString('id-ID')} / ${Number(p.price_usd).toFixed(2)}
                  </td>
                  <td className="px-6 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      p.market_scope === 'international' ? 'bg-blue-100 text-blue-700' :
                      p.market_scope === 'national' ? 'bg-emerald-100 text-emerald-700' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {p.market_scope}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition"
                      title="Hapus"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Form Create Produk */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Tambah Produk Baru</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Produk</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Kategori</label>
                <select
                  value={formData.category_id}
                  onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                  className="w-full border p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Harga Rp (IDR)</label>
                  <input
                    type="number"
                    value={formData.price_idr}
                    onChange={(e) => setFormData({ ...formData, price_idr: e.target.value })}
                    className="w-full border p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Harga $ (USD)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price_usd}
                    onChange={(e) => setFormData({ ...formData, price_usd: e.target.value })}
                    className="w-full border p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Cakupan Pasar</label>
                <select
                  value={formData.market_scope}
                  onChange={(e) => setFormData({ ...formData, market_scope: e.target.value })}
                  className="w-full border p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="both">Nasional & Internasional (Both)</option>
                  <option value="national">Lokal / Nasional Saja</option>
                  <option value="international">Ekspor / Internasional Saja</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Upload Foto Produk</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="w-full border p-1 text-sm rounded-lg text-gray-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Deskripsi Produk</label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm border rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 font-semibold"
                >
                  Simpan Produk
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;