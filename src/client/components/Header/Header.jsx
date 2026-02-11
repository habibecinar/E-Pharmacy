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
            <img 
              src="/images/logo/logo.png" 
              alt="E-Pharmacy" 
              className="header-logo-img"
            />
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
