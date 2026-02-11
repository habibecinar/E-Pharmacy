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
            <NavLink to="/medicine-store" className="header-nav-link">
              Shop
            </NavLink>
            <NavLink to="/medicine" className="header-nav-link">
              Medicine
            </NavLink>
            <NavLink to="/statistics" className="header-nav-link">
              Statistics
            </NavLink>
          </nav>

          {/* Auth Buttons */}
          <div className="header-auth">
            <Button variant="outline" size="small">
              Log out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
