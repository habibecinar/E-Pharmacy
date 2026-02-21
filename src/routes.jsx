import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Client Layouts
import ClientLayout from './client/layouts/ClientLayout';

// Client Pages
import HomePage from './client/pages/HomePage';
import MedicineStorePage from './client/pages/MedicineStorePage';
import MedicinePage from './client/pages/MedicinePage';
import MedicineDetailPage from './client/pages/MedicineDetailPage';
import StatisticsPage from './client/pages/StatisticsPage';
import ProductPage from './client/pages/ProductPage';
import CartPage from './client/pages/CartPage';
import RegisterPage from './client/pages/RegisterPage';
import LoginPage from './client/pages/LoginPage';

// Admin Layouts
import AdminLayout from './admin/layouts/AdminLayout';

// Admin Pages
import AdminLoginPage from './admin/pages/AdminLoginPage';
import DashboardPage from './admin/pages/DashboardPage';
import AllOrdersPage from './admin/pages/AllOrdersPage';
import AllProductsPage from './admin/pages/AllProductsPage';
import AllSuppliersPage from './admin/pages/AllSuppliersPage';
import CustomersDataPage from './admin/pages/CustomersDataPage';

// Route Guards
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

const AdminRoute = ({ children }) => {
  const { user, isAdmin } = useAuth();
  return user && isAdmin ? children : <Navigate to="/admin/login" replace />;
};

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Client Routes */}
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Navigate to={user ? '/medicine' : '/home'} replace />} />
        <Route path="home" element={<HomePage />} />
        <Route path="medicine-store" element={<MedicineStorePage />} />
        <Route path="medicine" element={<MedicinePage />} />
        <Route path="medicine/:id" element={<MedicineDetailPage />} />
        <Route path="statistics" element={<StatisticsPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="orders" element={<AllOrdersPage />} />
        <Route path="products" element={<AllProductsPage />} />
        <Route path="suppliers" element={<AllSuppliersPage />} />
        <Route path="customers" element={<CustomersDataPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default AppRoutes;
