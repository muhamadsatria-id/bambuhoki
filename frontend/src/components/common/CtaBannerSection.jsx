import { Link } from 'react-router-dom';

const CtaBannerSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-20 font-sf">
      <div className="bg-[#E60000] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Ready to grow? <br />We’re ready to go.
          </h2>
          <p className="text-white/90 text-sm sm:text-base font-normal">
            Bergabunglah dengan mitra global dan grosir nasional yang telah mempercayakan pasokan florikultura mereka kepada PT Bambu Hoki.
          </p>
        </div>
        <Link
          to="/contact"
          className="bg-black hover:bg-gray-900 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all whitespace-nowrap active:scale-95"
        >
          Hubungi Tim Kami
        </Link>
      </div>
    </section>
  );
};

export default CtaBannerSection;