import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const defaultProducts = [
  {
    eyebrow: 'Ekspor Utama',
    title: 'Bambu Hoki (Lucky Bamboo)',
    description: 'Rangkaian anyaman bambu hoki kualitas ekspor dengan standar fitosanitari resmi untuk suplai pasar internasional.',
    img: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80',
    className: 'max-lg:rounded-t-3xl lg:col-span-3 lg:rounded-tl-3xl',
  },
  {
    eyebrow: 'Grade Ekspor',
    title: 'Bonggol Suji Premium',
    description: 'Bonggol suji pilihan berkulit sehat dan akar kuat, siap kirim via kontainer laut maupun kargo udara.',
    img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80',
    className: 'lg:col-span-3 lg:rounded-tr-3xl',
  },
  {
    eyebrow: 'Florikultura',
    title: 'Tanaman Hias Pilihan',
    description: 'Varietas tanaman hias tropis segar hasil budidaya kebun Sukabumi untuk mempercantik lanskap.',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    className: 'lg:col-span-2 lg:rounded-bl-3xl',
  },
  {
    eyebrow: 'Custom Crafting',
    title: 'Anyaman & Bentuk Unik',
    description: 'Pengrajin berpengalaman siap mengerjakan pesanan custom susunan bambu hoki sesuai spesifikasi pembeli.',
    img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
    className: 'lg:col-span-2',
  },
  {
    eyebrow: 'Grosir & Kontainer',
    title: 'Pengiriman Partai Besar',
    description: 'Kapasitas produksi hingga puluhan ribu batang per bulan untuk distributor dan importer florikultura.',
    img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    className: 'max-lg:rounded-b-3xl lg:col-span-2 lg:rounded-br-3xl',
  },
];

export function BentoCard({
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  linkTo = '/catalogue',
}) {
  return (
    <div
      className={cn(
        className,
        'group relative flex flex-col overflow-hidden rounded-3xl',
        'bg-[#0D0D0D] border border-gray-100/10 shadow-lg transition-all duration-300 hover:shadow-xl'
      )}
    >
      <Link to={linkTo} className="relative flex flex-col h-full w-full">
        {/* Graphic Layer */}
        <div className="relative h-[28rem] w-full shrink-0 overflow-hidden">
          {graphic}
        </div>

        {/* Text Container (Overlay Gelap Menyatu) */}
        <div className="relative p-6 sm:p-8 z-20 isolate mt-[-130px] h-[15rem] backdrop-blur-xl bg-[#0D0D0D]/70 text-white flex flex-col justify-between border-t border-white/10">
          <div>
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
              {eyebrow}
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              {title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mt-3 group-hover:translate-x-1.5 transition-transform">
            <span>Jelajahi Produk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    </div>
  );
}

const ProductShowcase = ({ products = defaultProducts }) => {
  return (
    <section className="bg-white py-16 md:py-24 font-sf">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header Section (Konsisten dengan AboutSection) */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-3 block">
              — KOLEKSI UNGGULAN
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight leading-tight">
              Siap untuk pasar global
            </h2>
            <p className="mt-3 max-w-2xl text-xs md:text-sm text-gray-600 leading-relaxed">
              Produk florikultura Sukabumi kualitas ekspor dengan sertifikasi fitosanitari terjamin.
            </p>
          </div>

          {/* Button konsisten dengan AboutSection */}
          <Link
            to="/catalogue"
            className="bg-[#153e25] hover:bg-[#0f2e1b] text-white px-6 py-3.5 rounded-full text-xs md:text-sm font-semibold inline-flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg active:scale-95 group shrink-0"
          >
            <span>Lihat Semua Produk</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento Grid Container */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {products.map((product, idx) => (
            <BentoCard
              key={idx}
              eyebrow={product.eyebrow}
              title={product.title}
              description={product.description}
              className={product.className}
              graphic={
                <img
                  src={product.img}
                  alt={product.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;