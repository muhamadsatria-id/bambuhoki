import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../components/layouts/PublicLayout';
import AdminLayout from '../components/layouts/AdminLayout';
import ProtectedRoute from './ProtectedRoute';

import Home from '../pages/public/Home';
import Catalogue from '../pages/public/Catalogue';
import AdminLogin from '../pages/admin/AdminLogin';
import ManageProducts from '../pages/admin/ManageProducts';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="catalogue" element={<Catalogue />} />
      </Route>

      {/* Admin Auth */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Protected Admin CMS Pages */}
      <Route path="/admin" element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="dashboard" element={<ManageProducts />} />
          <Route path="products" element={<ManageProducts />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;