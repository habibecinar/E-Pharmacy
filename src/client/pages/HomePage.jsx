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
                Your Trusted <span className="hero-highlight">Online Pharmacy</span>
              </h1>
              <p className="hero-description">
                Get quality medicines delivered to your doorstep. Fast, reliable, and secure.
              </p>
              <div className="hero-buttons">
                <Link to="/medicine">
                  <Button size="large">Shop Medicines</Button>
                </Link>
                <Link to="/register">
                  <Button variant="secondary" size="large">Create Account</Button>
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="/images/products/paracetamol.jpg" 
                alt="Medicines" 
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Get your medicines delivered within 24 hours to your doorstep.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>100% Authentic</h3>
              <p>All medicines are sourced directly from verified manufacturers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">�</div>
              <h3>Wide Range</h3>
              <p>Over 10,000+ medicines and healthcare products available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Medicines</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Pharmacies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Search Medicines</h3>
              <p>Find the medicines you need from our extensive catalog.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Place Order</h3>
              <p>Add to cart and complete your order securely.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Get Delivered</h3>
              <p>Receive your medicines at your doorstep quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of satisfied customers today!</p>
          <div className="cta-buttons">
            <Link to="/register">
              <Button variant="secondary" size="large">Sign Up Now</Button>
            </Link>
            <Link to="/medicine">
              <Button variant="outline" size="large">Browse Medicines</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
