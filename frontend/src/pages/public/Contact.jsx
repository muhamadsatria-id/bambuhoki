import ContactInfo from '../../components/contact/ContactInfo';
import ContactMap from '../../components/contact/ContactMap';
import ContactSection from '../../components/common/ContactSection';

const Contact = () => {
  return (
    <div className="bg-gray-50/60 pb-20 pt-28 min-h-screen font-sf">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header Title Banner */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase mb-2 block">
            — LOKASI & DISKUSI
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight mb-3">
            Hubungi PT Bambu Hoki
          </h1>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Pusat budidaya, pembuatan custom anyaman, dan pengiriman partai besar dari Sukabumi, Jawa Barat.
          </p>
        </div>

        {/* Section 1: Informasi Kontak & Form Diskusi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Kartu Informasi & Sosmed */}
          <ContactInfo />

          {/* Form Diskusi Interaktif (Pakai ContactSection) */}
          <div className="w-full">
            <ContactSection />
          </div>
        </div>

        {/* Section 2: Google Maps Lokasi Selabintana */}
        <div>
          <ContactMap />
        </div>

      </div>
    </div>
  );
};

export default Contact;