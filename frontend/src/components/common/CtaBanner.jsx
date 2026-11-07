import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaBanner = ({
  eyebrow = 'Siap memenuhi kebutuhan Anda',
  heading = 'Butuh pasokan rutin untuk ekspor?',
  description = 'Diskusikan volume, jadwal pengiriman, dan kebutuhan dokumentasi dengan tim ekspor kami.',
  ctaLabel = 'Mulai Diskusi',
  ctaTo = '/contact',
  secondaryLabel = 'Lihat Katalog',
  secondaryTo = '/catalogue',
}) => {
  return (
    <section className="bg-white px-6 py-16 md:py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-brand-dark px-6 py-14 text-center sm:px-12 sm:py-16">
        {/* Subtle red glow accent */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-red/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-2xl">
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
              {description}
            </p>
          )}

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to={ctaTo}
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/40 transition-all hover:bg-red-700 active:scale-95"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryLabel && secondaryTo && (
              <Link
                to={secondaryTo}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
