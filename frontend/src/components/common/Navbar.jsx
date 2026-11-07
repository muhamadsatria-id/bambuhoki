import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Globe, Search, ChevronDown, Menu, X } from 'lucide-react';
import ModalAuth from './ModalAuth'; // Sesuaikan path komponen ModalAuth Anda

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  // Mencegah body scroll saat mobile menu terbuka (Scroll Lock)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header Bar Utama */}
      <header className="fixed inset-x-0 top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 font-sf">
        {/* Container internal disamakan persis dengan layout Footer: max-w-7xl mx-auto px-6 */}
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          
          {/* Brand / Logo */}
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group"
          >
            <Sprout className="h-7 w-7 text-emerald-600 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-gray-900 leading-none">
                Bambu Hoki
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-[14px] text-gray-900 tracking-tight">
            <Link to="/" className="hover:opacity-70 transition-opacity">
              Beranda
            </Link>
            
            {/* Dropdown Menu */}
            <div className="relative group cursor-pointer flex items-center gap-1 hover:opacity-70 transition-opacity py-1">
              <Link to="/about">Tentang Kami</Link>
              <ChevronDown className="w-3.5 h-3.5 text-gray-700 transition-transform group-hover:rotate-180" />
            </div>

            <Link to="/catalogue" className="hover:opacity-70 transition-opacity">
              Produk
            </Link>
            <Link to="/gallery" className="hover:opacity-70 transition-opacity">
              Galeri
            </Link>
            <Link to="/articles" className="hover:opacity-70 transition-opacity">
              Artikel
            </Link>
            <Link to="/contact" className="hover:opacity-70 transition-opacity">
              Kontak
            </Link>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Language Selector */}
            <button 
              type="button"
              className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold text-gray-900 hover:opacity-70 transition-opacity"
            >
              <Globe className="w-4 h-4 text-gray-700" />
              <span>ID</span>
            </button>

            {/* Search Button */}
            <button 
              type="button"
              aria-label="Search"
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* CTA / Auth Button */}
            <button
              type="button"
              onClick={() => openAuthModal('login')}
              className="hidden sm:inline-flex bg-[#111111] hover:bg-black text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-sm"
            >
              Masuk
            </button>

            {/* Hamburger Button (Mobile) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden z-50 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-Page Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out flex flex-col justify-between pt-28 pb-10 px-6 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 text-center font-bold text-xl text-gray-900 mt-4">
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="py-2 hover:text-emerald-600 transition-colors"
          >
            Beranda
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="py-2 hover:text-emerald-600 transition-colors"
          >
            Tentang Kami
          </Link>
          <Link 
            to="/catalogue" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="py-2 hover:text-emerald-600 transition-colors"
          >
            Katalog Produk
          </Link>
          <Link 
            to="/gallery" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="py-2 hover:text-emerald-600 transition-colors"
          >
            Galeri
          </Link>
          <Link 
            to="/articles" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="py-2 hover:text-emerald-600 transition-colors"
          >
            Artikel
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="py-2 hover:text-emerald-600 transition-colors"
          >
            Kontak
          </Link>
        </nav>

        {/* Bottom Actions */}
        <div className="w-full max-w-sm mx-auto flex flex-col gap-3">
          <button
            type="button"
            onClick={() => openAuthModal('login')}
            className="w-full bg-[#111111] hover:bg-black text-white py-3.5 rounded-full text-center text-sm font-semibold transition-all active:scale-95 shadow-md"
          >
            Masuk
          </button>
          <button
            type="button"
            onClick={() => openAuthModal('register')}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3.5 rounded-full text-center text-sm font-semibold transition-all active:scale-95"
          >
            Daftar
          </button>
        </div>
      </div>

      {/* Modal Auth Component */}
      <ModalAuth
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;