import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const PublicLayout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sf text-gray-900 antialiased selection:bg-brand-red selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PublicLayout;