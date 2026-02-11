import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/admin/orders', label: 'Orders', icon: 'orders' },
    { path: '/admin/products', label: 'Products', icon: 'products' },
    { path: '/admin/customers', label: 'Customers', icon: 'customers' },
    { path: '/admin/suppliers', label: 'Suppliers', icon: 'suppliers' },
  ];

  const getIcon = (iconName) => {
    const icons = {
      dashboard: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="7" height="7" strokeWidth="2" strokeLinecap="round"/>
          <rect x="14" y="3" width="7" height="7" strokeWidth="2" strokeLinecap="round"/>
          <rect x="14" y="14" width="7" height="7" strokeWidth="2" strokeLinecap="round"/>
          <rect x="3" y="14" width="7" height="7" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      orders: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 2L7 8H3L8 12L6 18L12 14L18 18L16 12L21 8H17L15 2H9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      products: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
          <path d="M3 9H21M9 21V9" strokeWidth="2"/>
        </svg>
      ),
      customers: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="9" cy="7" r="4" strokeWidth="2"/>
          <path d="M23 21V19C23 17.9391 22.5786 16.9217 21.8284 16.1716C21.0783 15.4214 20.0609 15 19 15H18" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      suppliers: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 22V12H15V22" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    };
    return icons[iconName] || null;
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#59B17A"/>
          <path d="M16 8L8 16H12V24H20V16H24L16 8Z" fill="white"/>
        </svg>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? 'sidebar-nav-item--active' : ''}`
            }
            title={item.label}
          >
            {getIcon(item.icon)}
            <span className="sidebar-nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
