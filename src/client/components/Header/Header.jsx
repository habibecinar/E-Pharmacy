import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { Button } from '../../../shared/components';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/home');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to={user ? '/medicine' : '/home'} className="header-logo">
            <img 
              src="/images/logo/logo.png" 
              alt="E-Pharmacy" 
              className="header-logo-img"
            />
          </Link>

          {/* Navigation - sadece giriş yapılmışsa göster */}
          {user && (
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
          )}

          {/* Auth Buttons */}
          <div className="header-auth">
            {user ? (
              <Button variant="outline" size="small" onClick={handleLogout}>
                Log out
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="small">Log in</Button>
                </Link>
                <Link to="/home">
                  <Button variant="primary" size="small">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
