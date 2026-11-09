import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

const CtaBreadcrumb = ({ title = "Katalog Produk Florikultura", category = "Semua Produk" }) => {
  return (
    <div className="relative w-full bg-[#0D0D0D] text-white pt-10 pb-12 px-6 font-sf overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-[#153e25]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <Link to="/" className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <Link to="/catalogue" className="hover:text-emerald-400 transition-colors">
            Katalog
          </Link>
          {category && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-emerald-400 font-medium">{category}</span>
            </>
          )}
        </nav>

        {/* CTA Content Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Standar Sertifikasi Ekspor</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {title}
            </h1>
            <p className="text-xs md:text-sm text-gray-400 max-w-xl mt-3 leading-relaxed">
              Jelajahi koleksi tanaman hias, bonggol suji, dan anyaman bambu hoki siap suplai grosir nasional hingga kontainer ekspor.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-xs text-gray-400 block">Kapasitas Suplai</span>
              <span className="text-sm font-bold text-emerald-400">50.000+ Batang / Bulan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBreadcrumb;