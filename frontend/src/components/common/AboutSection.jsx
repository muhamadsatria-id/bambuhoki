import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// Sesuaikan path gambar gudang Anda jika menggunakan assets lokal
import gudangImg from '../../assets/gudang-bambuhoki.png'; 

const AboutSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white font-sf overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* KIRI: GAMBAR GUDANG / PERKEBUNAN */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group">
          <img 
            src={gudangImg} 
            alt="Gudang dan Fasilitas Pemrosesan PT Bambu Hoki" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // Fallback gambar jika path lokal belum tersedia
              e.target.src = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* KANAN: TENTANG PERUSAHAAN (SINGKAT) */}
        <div className="flex flex-col justify-center items-start">
          <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-3 block">
            — TENTANG KAMI
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight mb-5 leading-tight">
            Pusat Budidaya & Ekspor Bambu Hoki Terbesar di Sukabumi
          </h2>

          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-8 max-w-lg">
            PT Bambu Hoki adalah produsen dan eksportir utama tanaman hias, bonggol suji, dan anyaman bambu hoki terkemuka dari Sukabumi, Jawa Barat. Kami mengoperasikan lahan pembibitan dan fasilitas gudang pengolahan terpadu untuk menjamin mutu produk serta kepatuhan karantina ekspor internasional.
          </p>

          {/* BUTTON KENALI KAMI SELENGKAPNYA */}
          <Link
            to="/about"
            className="bg-[#153e25] hover:bg-[#0f2e1b] text-white px-6 py-3.5 rounded-full text-xs md:text-sm font-semibold inline-flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg active:scale-95 group"
          >
            <span>Kenali Kami Selengkapnya</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;