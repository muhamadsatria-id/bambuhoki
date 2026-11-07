import { useState } from 'react';

const defaultFaqs = [
  {
    question: 'Apakah produk Bambu Hoki memiliki sertifikasi fitosanitari resmi?',
    answer:
      'Ya, seluruh produk tanaman hias, bambu hoki, dan bonggol suji ekspor telah melalui uji karantina tumbuhan dan dilengkapi Sertifikat Fitosanitari (Phytosanitary Certificate) resmi.',
  },
  {
    question: 'Berapa minimal pemesanan (MOQ) untuk pasar grosir & ekspor?',
    answer:
      'Untuk pengiriman lokal/grosir nasional minimal pemesanan adalah 500–1.000 batang. Untuk kargo ekspor, kami melayani pemesanan LCL hingga FCL (Full Container Load 20ft / 40ft).',
  },
  {
    question: 'Bagaimana proses pengemasan agar tanaman tetap segar?',
    answer:
      'Kami menggunakan packing standar ekspor—termasuk pelembap media gel steril standar karantina serta peti/karton berventilasi khusus tahan guncangan laut & udara.',
  },
  {
    question: 'Apakah melayani pemesanan custom anyaman/crafting?',
    answer:
      'Tentu saja! Pengrajin berpengalaman kami di Sukabumi siap mengerjakan variasi bentuk anyaman (menara, naga, susun rantang, dll) sesuai permintaan buyer.',
  },
];

const FaqSection = ({ faqs = defaultFaqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-transparent py-20 font-sf">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 px-6">
        
        {/* Gambar Samping (Left Column) */}
        <div className="w-full md:w-5/12 shrink-0">
          <img
            className="w-full rounded-2xl h-[420px] object-cover shadow-lg border border-gray-100"
            src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80"
            alt="Perkebunan Bambu Hoki Sukabumi"
          />
        </div>

        {/* Konten FAQ & Accordion (Right Column) */}
        <div className="w-full md:w-7/12">
          <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest">
            FAQ's
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mt-1 md:text-4xl">
            Sering Ditanyakan
          </h2>
          <p className="text-sm text-gray-500 mt-2 pb-6 leading-relaxed">
            Informasi lengkap seputar kualifikasi karantina, kapasitas produksi, dan prosedur pengiriman ekspor.
          </p>

          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="py-4 cursor-pointer group"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {faq.question}
                    </h3>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`shrink-0 ${
                        isOpen ? 'rotate-180 text-emerald-600' : 'text-gray-700'
                      } transition-transform duration-500 ease-in-out`}
                    >
                      <path
                        d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen
                        ? 'max-h-[300px] opacity-100 translate-y-0 pt-3'
                        : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <p className="text-sm text-gray-600 leading-relaxed pr-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;