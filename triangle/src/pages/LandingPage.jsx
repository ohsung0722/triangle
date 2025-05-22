import React from 'react';
import Button from '../components/Button';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>세모에 오신 것을 환영합니다</h1>
        <p className="subtitle">당신에게 적합한 동아리를 찾아보세요</p>
      </header>

      <main className="landing-content">

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
          <h2>지금 바로 시작하세요</h2>
          <p>당신에게 적합한 동아리를 찾아보세요</p>
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
              href="https://github.com/SejongOSS/triangle"
            >
              Github
            </Button>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <Button 
              variant="outline"
              href="http://www.sejong.ac.kr/"
            >
              Visit Sejong
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 