import { Link } from 'react-router-dom';
import { Sprout, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-16 pb-12 font-sf">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-800 pb-12">
        
        {/* Brand & Call to Action */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4 group inline-flex">
              <Sprout className="h-7 w-7 text-emerald-500 transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">
                  Bambu Hoki
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-400 max-w-sm mb-6 leading-relaxed">
              Produsen dan eksportir utama tanaman hias, bonggol suji, dan anyaman bambu hoki terkemuka dari Sukabumi, Jawa Barat.
            </p>
          </div>

          <div>
            <Link
              to="/contact"
              className="bg-[#E60000] hover:bg-red-700 text-white px-6 py-3 rounded-full text-xs font-semibold inline-flex items-center gap-2 transition-all shadow-sm active:scale-95"
            >
              <span>Hubungi Tim Ekspor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Navigation Links - Produk & Layanan */}
        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Katalog Produk
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li>
              <Link to="/catalogue" className="hover:text-white transition-colors">
                Bambu Hoki (Lucky Bamboo)
              </Link>
            </li>
            <li>
              <Link to="/catalogue" className="hover:text-white transition-colors">
                Bonggol Suji Export Grade
              </Link>
            </li>
            <li>
              <Link to="/catalogue" className="hover:text-white transition-colors">
                Tanaman Hias Florikultura
              </Link>
            </li>
            <li>
              <Link to="/catalogue" className="hover:text-white transition-colors">
                Custom Crafting & Anyaman
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Links - Perusahaan */}
        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Perusahaan
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white transition-colors">
                Galeri Perkebunan
              </Link>
            </li>
            <li>
              <Link to="/articles" className="hover:text-white transition-colors">
                Artikel & Berita
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Lokasi & Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Informasi Karantina & Ekspor */}
        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Ekspor & Kepatuhan
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li className="text-gray-400">Sertifikasi Fitosanitari</li>
            <li className="text-gray-400">Standar Karantina Resmi</li>
            <li className="text-gray-400">Pengiriman Laut & Udara</li>
            <li className="text-gray-400">Sukabumi, Jawa Barat</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 gap-4">
        <p>© 2026 PT Bambu Hoki. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-gray-400 transition-colors">
            Kebijakan Privasi
          </Link>
          <Link to="/terms" className="hover:text-gray-400 transition-colors">
            Syarat & Ketentuan
          </Link>
          <Link to="/sitemap" className="hover:text-gray-400 transition-colors">
            Peta Situs
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;