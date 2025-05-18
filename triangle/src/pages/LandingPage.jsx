import React from 'react';
import Button from '../components/Button';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to Our Platform</h1>
        <p className="subtitle">Discover amazing features and possibilities</p>
      </header>

      <main className="landing-content">
        <section className="hero-section">
          <div className="hero-content">
            <h2>Get Started Today</h2>
            <p>Join our community and explore all the features we have to offer.</p>
            <div className="button-group">
              <Button 
                size="large" 
                variant="primary"
                to="/signup"
              >
                Sign Up Now
              </Button>
              <Button 
                size="large" 
                variant="outline"
                to="/learn-more"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>Our Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Easy to Use</h3>
              <p>Intuitive interface designed for the best user experience</p>
              <Button 
                variant="secondary"
                to="/features/easy-to-use"
              >
                Learn More
              </Button>
            </div>
            <div className="feature-card">
              <h3>Powerful Tools</h3>
              <p>Access to advanced features and capabilities</p>
              <Button 
                variant="secondary"
                to="/features/powerful-tools"
              >
                Learn More
              </Button>
            </div>
            <div className="feature-card">
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance for all your needs</p>
              <Button 
                variant="secondary"
                to="/features/support"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of satisfied users today</p>
          <Button 
            size="large" 
            variant="primary"
            to="/get-started"
          >
            Get Started
          </Button>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <Button 
              variant="outline"
              to="/about"
            >
              Learn More
            </Button>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <Button 
              variant="outline"
              to="/contact"
            >
              Contact Us
            </Button>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <Button 
              variant="outline"
              href="https://ecampus.sejong.ac.kr/"
            >
              Visit eCampus
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 