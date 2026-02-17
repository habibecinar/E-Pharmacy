import { Link } from 'react-router-dom';
import { Button } from '../../shared/components';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Your medication,<br />
                delivered Say goodbye<br />
                to all <span className="hero-highlight">your healthcare</span><br />
                worries with us
              </h1>
              <div className="hero-buttons">
                <Link to="/register">
                  <Button size="large">Get Started</Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="large">Sign In</Button>
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop" 
                alt="Medicine Pill" 
                className="hero-pill-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
