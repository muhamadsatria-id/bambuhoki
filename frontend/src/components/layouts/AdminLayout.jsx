import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { LayoutDashboard, Package, FileText, Image, MessageSquare, Users, Settings, LogOut } from 'lucide-react';

const AdminLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-white font-sans antialiased">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-white border-r border-gray-200 text-gray-900 flex flex-col justify-between p-4">
        <div>
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-xl font-semibold tracking-tight">PT Bambu Hoki</h2>
            <p className="text-xs text-gray-500">Admin Dashboard CMS</p>
          </div>
          <nav className="mt-6 space-y-1">
            <Link to="/admin/dashboard" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 transition">
              <LayoutDashboard size={18} /> Dashboard
            </Link>
            <Link to="/admin/products" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 transition">
              <Package size={18} /> Katalog Produk
            </Link>
            <Link to="/admin/articles" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 transition">
              <FileText size={18} /> Artikel / Berita
            </Link>
            <Link to="/admin/galleries" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 transition">
              <Image size={18} /> Galeri Foto
            </Link>
            <Link to="/admin/messages" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 transition">
              <MessageSquare size={18} /> Pesan Masuk
            </Link>
            <Link to="/admin/users" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 transition">
              <Users size={18} /> Kelola User Admin
            </Link>
            <Link to="/admin/settings" className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 transition">
              <Settings size={18} /> Pengaturan Profil
            </Link>
          </nav>
        </div>

        {/* User Info & Logout Button */}
        <div className="pt-4 border-t border-gray-200">
          <div className="px-4 mb-3">
            <p className="text-sm font-semibold truncate text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm py-2 px-4 rounded-md font-medium transition"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-900">Sistem Manajemen Konten</h1>
          <a href="/" target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
            Lihat Website Utama &rarr;
          </a>
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;