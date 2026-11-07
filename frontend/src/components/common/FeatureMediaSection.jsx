import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeatureMediaSection = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 font-sf">
      <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1000&auto=format&fit=crop"
            alt="Perkebunan Sukabumi"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
            Keunggulan Utama dari Kebun Sukabumi
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed mb-6 font-normal">
            Didukung oleh tanah subur dan iklim mikro Sukabumi, perkebunan kami menghasilkan tanaman dengan daya tahan tinggi, akar yang sehat, serta memenuhi parameter fitosanitari ekspor internasional.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all border border-white/20"
          >
            <span>Tentang Perkebunan Kami</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureMediaSection;