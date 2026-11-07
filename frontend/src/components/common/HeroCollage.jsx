import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = ({
  badge = 'Eksportir Resmi Florikultura Sukabumi',
  title = (
    <>
      Breakthrough <br />
      in Floriculture.
    </>
  ),
  subtitle = 'Produsen utama Bambu Hoki, Suji, & Tanaman Hias Premium. Memenuhi suplai grosir pasar nasional hingga kontainer ekspor internasional dengan sertifikasi fitosanitari terjamin.',
  bgImage = 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1600&q=80',
  primary = { label: 'Jelajahi E-Catalogue', to: '/catalogue' },
  secondary = { label: 'Hubungi Tim Ekspor', to: '/contact' },
}) => {
  return (
    // Kurangi padding bottom outer wrapper agar card bisa membentang lebih kebawah
    <section className="relative w-full min-h-screen pt-20 pb-2 px-3 sm:px-5 font-sf bg-gray-50 flex flex-col">
      
      {/* Frame Gambar: Menggunakan h-[calc(100vh-5.5rem)] agar ujung bawahnya hampir menempel ke batas bawah monitor */}
      <div className="relative w-full flex-1 flex flex-col justify-center rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl min-h-[calc(100vh-5.5rem)]">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Hero Background"
            className="w-full h-full object-cover object-center transform scale-105"
          />
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center text-white flex flex-col items-center justify-center">
          {badge && (
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md mb-6 shadow-sm">
              {badge}
            </span>
          )}

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1] max-w-3xl drop-shadow-md">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-200 leading-relaxed font-normal drop-shadow">
            {subtitle}
          </p>

          {(primary || secondary) && (
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {primary && (
                <Link
                  to={primary.to}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-red-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-600/40 transition-all hover:bg-red-700 hover:scale-[1.02] active:scale-95"
                >
                  {primary.label}
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 text-white" />
                  </div>
                </Link>
              )}
              {secondary && (
                <Link
                  to={secondary.to}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-black/20 backdrop-blur-md px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:border-white active:scale-95"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;