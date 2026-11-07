import React from 'react';
import { Sprout, ShieldCheck, Truck, Globe2, PackageCheck, Handshake } from 'lucide-react';

/**
 * Adapted from the 21st.dev "Grid Feature Cards" block. Kept dependency-free:
 * no shadcn `cn`, no motion. The hairline grid and the masked grid-pattern
 * texture come straight from the original design.
 */

function genPattern(length = 5) {
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);
}

function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

const FeatureCard = ({ feature }) => {
  const squares = React.useMemo(() => genPattern(), []);
  const Icon = feature.icon;

  return (
    <div className="relative overflow-hidden bg-white p-6">
      <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/5 to-transparent opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={squares}
            className="absolute inset-0 h-full w-full fill-gray-900/5 stroke-gray-900/20 mix-blend-overlay"
          />
        </div>
      </div>

      <Icon className="relative z-20 h-6 w-6 text-gray-500" strokeWidth={1.4} aria-hidden />
      <h3 className="relative z-20 mt-10 text-base font-semibold text-gray-900">
        {feature.title}
      </h3>
      <p className="relative z-20 mt-2 text-sm leading-relaxed text-gray-600">
        {feature.description}
      </p>
    </div>
  );
};

const defaultFeatures = [
  {
    icon: Globe2,
    title: 'Pasar Global & Lokal',
    description: 'Melayani pengiriman kontainer ekspor laut/udara dan pasar grosir florikultura Indonesia.',
  },
  {
    icon: ShieldCheck,
    title: 'Kualitas Grade Ekspor',
    description: 'Produk bebas hama dengan sertifikasi fitosanitari resmi dari otoritas karantina.',
  },
  {
    icon: Truck,
    title: 'Suplai Perkebunan Langsung',
    description: 'Dipanen langsung dari kebun budidaya Sukabumi untuk menjamin kesegaran tanaman.',
  },
  {
    icon: PackageCheck,
    title: 'Kapasitas Grosir',
    description: 'Siap memenuhi pesanan bervolume besar dengan jadwal pengiriman yang konsisten.',
  },
  {
    icon: Sprout,
    title: 'Budidaya Terkontrol',
    description: 'Pembibitan dan perawatan dilakukan tim berpengalaman dengan standar mutu internal.',
  },
  {
    icon: Handshake,
    title: 'Pendampingan Ekspor',
    description: 'Membantu proses dokumentasi, karantina, hingga koordinasi pengiriman internasional.',
  },
];

const FeatureGrid = ({
  eyebrow = 'Mengapa Bambu Hoki',
  heading = 'Standar ekspor, tanpa kompromi',
  subheading = 'Dari kebun di Sukabumi hingga pelabuhan tujuan, setiap tahap dijaga agar produk sampai dalam kondisi terbaik.',
  features = defaultFeatures,
}) => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-5xl space-y-10 px-6">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-red">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
              {subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 divide-x divide-y divide-dashed divide-gray-200 border border-dashed border-gray-200 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
