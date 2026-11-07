import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const serviceCards = [
  {
    id: 'land',
    title: 'Land',
    tagline: 'Pasar Ekspor & Internasional',
    desc: 'Membantu buyer luar negeri dalam pengadaan kontainer bambu hoki & tanaman hias dengan standar karantina resmi.',
    img: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&auto=format&fit=crop',
    link: '/catalogue',
  },
  {
    id: 'launch',
    title: 'Launch',
    tagline: 'Grosir & Distributor Lokal',
    desc: 'Menyuplai toko tanaman hias, florist, dan distributor lokal dengan pasokan bonggol suji berkualitas tinggi.',
    img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&auto=format&fit=crop',
    link: '/catalogue',
  },
  {
    id: 'level-up',
    title: 'Level Up',
    tagline: 'Custom Crafting & Anyaman',
    desc: 'Layanan pengerjaan anyaman bambu hoki custom (Piramida, Tiang, Nanas) sesuai permintaan spesifik pasar.',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop',
    link: '/catalogue',
  },
];

const PageCardsSection = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 font-sf">
      <div className="text-center mb-14">
        <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-3">
          Ready to grow?<br />We’re ready to go
        </h2>
        <p className="text-sm sm:text-base text-emerald-100/70 max-w-xl mx-auto">
          Solusi pasokan florikultura terintegrasi dari kebun budidaya Sukabumi untuk setiap tahapan bisnis Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serviceCards.map((card) => (
          <Link
            key={card.id}
            to={card.link}
            className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-white/10 flex flex-col justify-between p-8"
          >
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />

            <div className="relative z-20 flex justify-between items-start">
              <div className="bg-[#E60000] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                {card.title}
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#E60000] transition-colors">
                <ArrowUpRight size={16} />
              </div>
            </div>

            <div className="relative z-20">
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest block mb-1">
                {card.tagline}
              </span>
              <p className="text-sm text-gray-200 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PageCardsSection;