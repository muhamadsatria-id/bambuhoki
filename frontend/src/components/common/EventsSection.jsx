import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';

const upcomingEvents = [
  {
    day: '19',
    month: 'SEP 26',
    title: 'Pameran Florikultura Ekspor 2026',
    location: 'BSD Grand Boulevard, Tangerang',
    time: '09:00 - 17:00 WIB',
  },
  {
    day: '09',
    month: 'NOV 26',
    title: 'Sosialisasi Sertifikasi Fitosanitari Kebun Sukabumi',
    location: 'Pusat Pelatihan Tani, Sukabumi',
    time: '10:00 - 15:00 WIB',
  },
  {
    day: '10',
    month: 'NOV 26',
    title: 'Business Matching: Asia-Pacific Flora Trade',
    location: 'Virtual Zoom Conference',
    time: '13:00 - 16:00 WIB',
  },
];

const EventsSection = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 font-sf">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Agenda & Pameran</h2>
          <p className="text-xs sm:text-sm text-emerald-100/70 mt-1">Ikuti kegiatan pameran florikultura dan sosialisasi ekspor terkini.</p>
        </div>
        <Link
          to="/articles"
          className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition border border-white/10"
        >
          Lihat Semua Agenda
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {upcomingEvents.map((evt, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 text-gray-900 border border-gray-100 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                <div className="bg-emerald-50 px-3.5 py-1.5 rounded-2xl border border-emerald-100 text-center">
                  <span className="block text-xl font-bold text-emerald-700 leading-none">{evt.day}</span>
                  <span className="text-[10px] font-bold text-emerald-800 uppercase">{evt.month}</span>
                </div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Agenda Resmi</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 hover:text-[#E60000] cursor-pointer transition">
                {evt.title}
              </h3>
            </div>

            <div className="space-y-2 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <MapPin className="w-4 h-4 text-[#E60000] shrink-0" />
                <span className="truncate">{evt.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Clock className="w-4 h-4 text-[#E60000] shrink-0" />
                <span>{evt.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;