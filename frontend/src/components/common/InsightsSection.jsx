import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const latestInsights = [
  {
    category: 'BERITA EKSPOR',
    title: 'PT Bambu Hoki Perluas Jangkauan Pengiriman Kontainer ke Pasar Asia Timur',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
    link: '/articles',
  },
  {
    category: 'BUDIDAYA',
    title: 'Teknik Pemeliharaan Bonggol Suji Agar Bebas Hama & Lolos Uji Karantina',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop',
    link: '/articles',
  },
  {
    category: 'PASAR GLOBAL',
    title: 'Trend Tanaman Lucky Bamboo di Pasar Dekorasi Interior Modern 2026',
    img: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&auto=format&fit=crop',
    link: '/articles',
  },
];

const InsightsSection = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 font-sf">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight">Artikel & Insights Terbaru</h2>
        <Link
          to="/articles"
          className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition border border-white/10"
        >
          Lihat Semua Artikel
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestInsights.map((news, idx) => (
          <Link
            key={idx}
            to={news.link}
            className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 flex flex-col group hover:border-emerald-400/50 transition-all"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={news.img}
                alt={news.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-emerald-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {news.category}
              </span>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <h3 className="text-base font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                {news.title}
              </h3>
              <span className="text-xs text-emerald-300 font-semibold mt-4 inline-flex items-center gap-1">
                Baca Selengkapnya <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;