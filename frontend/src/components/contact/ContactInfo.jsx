import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6 font-sf">
      {/* Header Info */}
      <div>
        <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase mb-2 block">
          — INFORMASI REKAPAN
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0D0D] tracking-tight mb-3">
          Hubungi Tim PT Bambu Hoki
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Kami siap melayani diskusi kebutuhan tanaman hias, bonggol suji, dan pesanan ekspor skala nasional maupun internasional.
        </p>
      </div>

      {/* Cards Detail Kontak */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* WhatsApp / Telepon */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#153e25] flex items-center justify-center mb-3">
            <Phone className="w-5 h-5" />
          </div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
            WhatsApp & Layanan Ekspor
          </h4>
          <a 
            href="https://wa.me/6289688500606" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-bold text-[#0D0D0D] hover:text-emerald-700 transition-colors block"
          >
            +62 896-8850-0606
          </a>
          <span className="text-[11px] text-gray-500 mt-1 block">Respon cepat jam kerja</span>
        </div>

        {/* Email Resmi */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#153e25] flex items-center justify-center mb-3">
            <Mail className="w-5 h-5" />
          </div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
            Email Pertanyaan & Dokumen
          </h4>
          <a 
            href="mailto:info@bambuhoki.co.id" 
            className="text-sm font-bold text-[#0D0D0D] hover:text-emerald-700 transition-colors block"
          >
            info@bambuhoki.co.id
          </a>
          <span className="text-[11px] text-gray-500 mt-1 block">Untuk penawaran & kerja sama</span>
        </div>

        {/* Alamat Kebun & Gudang */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#153e25] flex items-center justify-center mb-3">
            <MapPin className="w-5 h-5" />
          </div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
            Lokasi Kebun & Fasilitas
          </h4>
          <p className="text-xs font-semibold text-[#0D0D0D] leading-relaxed">
            Jl. Selabintana No. 124, Kec. Sukabumi, Kabupaten Sukabumi, Jawa Barat 43151
          </p>
        </div>

        {/* Jam Operasional */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#153e25] flex items-center justify-center mb-3">
            <Clock className="w-5 h-5" />
          </div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
            Jam Kerja Gudang
          </h4>
          <p className="text-xs font-semibold text-[#0D0D0D]">
            Senin - Sabtu: 08:00 - 17:00 WIB
          </p>
          <span className="text-[11px] text-gray-500 mt-1 block">Minggu: Konsultasi Janji Temu</span>
        </div>

      </div>

      {/* Sosial Media & E-Commerce */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm pt-4">
        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
          Saluran Resmi & E-Commerce
        </h4>

        <div className="flex items-center gap-5 text-gray-500">
          {/* Instagram */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors" title="Instagram">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors" title="Facebook">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors" title="TikTok">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.32 1.54-1.34 2.54-.03.8.31 1.61.9 2.14.73.66 1.79.88 2.73.61.94-.25 1.71-.97 2.01-1.9.15-.49.2-1.01.19-1.52.03-4.52.01-9.04.02-13.56z"/>
            </svg>
          </a>

          {/* Shopee */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors" title="Shopee">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19.77 7.23h-3.19a4.58 4.58 0 0 0-9.16 0H4.23A2.23 2.23 0 0 0 2 9.46l.88 10.74A3.23 3.23 0 0 0 6.1 23.2h11.8a3.23 3.23 0 0 0 3.22-3l.88-10.74a2.23 2.23 0 0 0-2.23-2.23zM12 4.4a2.78 2.78 0 0 1 2.77 2.83H9.23A2.78 2.78 0 0 1 12 4.4zm3.92 9.53c-.38.7-1.14 1.13-2.22 1.34v.66a.82.82 0 0 1-1.64 0v-.58a3.64 3.64 0 0 1-2.07-1.08.8.8 0 1 1 1.18-1.08c.5.54 1.1.84 1.82.84 1.05 0 1.53-.45 1.53-1 0-.44-.22-.76-1.32-1.07l-.46-.13c-1.65-.47-2.31-1.22-2.31-2.36 0-1.17.91-2.08 2.45-2.29v-.54a.82.82 0 0 1 1.64 0v.5a3.4 3.4 0 0 1 1.8 1.03.8.8 0 1 1-1.19 1.07c-.45-.5-.99-.77-1.64-.77-.9 0-1.43.43-1.43.95 0 .39.2.69 1.25.99l.46.13c1.78.51 2.44 1.28 2.44 2.39 0 1.04-.62 1.83-1.7 2.05z"/>
            </svg>
          </a>

          {/* Tokopedia */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors" title="Tokopedia">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19.4 6.78l-3.36-2.52a.8.8 0 0 0-1.04.07L12 7.23 9 4.33a.8.8 0 0 0-1.04-.07L4.6 6.78A2.4 2.4 0 0 0 3.6 8.7v9.6a2.4 2.4 0 0 0 2.4 2.4h12a2.4 2.4 0 0 0 2.4-2.4V8.7a2.4 2.4 0 0 0-1-1.92zM12 18.5a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 12 11.5z"/>
            </svg>
          </a>

          {/* Lazada */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors" title="Lazada">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L4.5 7 12 3.25 19.5 7 12 10.5zM2.8 9.8v6.9L10 21v-7.1L2.8 9.8zm18.4 0L14 13.9V21l7.2-4.3V9.8z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;