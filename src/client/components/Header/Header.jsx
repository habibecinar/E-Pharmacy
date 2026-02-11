import { Link, NavLink } from 'react-router-dom';
import { Button } from '../../../shared/components';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/home" className="header-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#59B17A"/>
              <path d="M16 8L8 16H12V24H20V16H24L16 8Z" fill="white"/>
            </svg>
            <span className="header-logo-text">E-Pharmacy</span>
          </Link>

          {/* Navigation */}
          <nav className="header-nav">
            <NavLink to="/home" className="header-nav-link">
              Home
            </NavLink>
            <NavLink to="/medicine-store" className="header-nav-link">
              Medicine store
            </NavLink>
            <NavLink to="/medicine" className="header-nav-link">
              Medicine
            </NavLink>
          </nav>

          {/* Auth Buttons */}
          <div className="header-auth">
            <Link to="/register">
              <Button variant="outline" size="small">
                Register
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="primary" size="small">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
