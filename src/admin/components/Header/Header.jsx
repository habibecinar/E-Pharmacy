import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { Button } from '../../../shared/components';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('dashboard')) return 'Dashboard';
    if (path.includes('orders')) return 'Orders';
    if (path.includes('products')) return 'Products';
    if (path.includes('customers')) return 'Customers';
    if (path.includes('suppliers')) return 'Suppliers';
    return 'Dashboard';
  };

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  return (
    <header className="admin-header">
      <div className="admin-header-content">
        <div className="admin-header-left">
          <div className="admin-header-brand">
            <img 
              src="/images/logo/logo.png" 
              alt="E-Pharmacy" 
              className="admin-header-logo"
            />
          </div>
          <span className="admin-header-divider">/</span>
          <span className="admin-header-page">{getPageTitle()}</span>
        </div>

        <div className="admin-header-right">
          <span className="admin-header-user">{user?.email || 'vendor@gmail.com'}</span>
          <Button variant="outline" size="small" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
