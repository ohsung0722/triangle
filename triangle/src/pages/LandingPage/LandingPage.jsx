import React, { useState } from 'react';
import Dialog from '../../components/Dialog/Dialog';
import Button from '../../components/Button/Button';
import './LandingPage.css';

const LandingPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: '',
    content: ''
  });

  const handleFeatureClick = (feature) => {
    const content = {
      '챗 봇': {
        title: 'Easy to Use',
        content: (
          <div className="space-y-4">
            <p>
              Our intuitive interface is designed with user experience in mind, making it easy for anyone to get started.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Simple and clean design</li>
              <li>Intuitive navigation</li>
              <li>Quick access to features</li>
              <li>User-friendly controls</li>
            </ul>
          </div>
        )
      },
      '검색 창': {
        title: 'Powerful Tools',
        content: (
          <div className="space-y-4">
            <p>
              Access a comprehensive suite of tools designed to enhance your learning experience.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Advanced search capabilities</li>
              <li>Real-time collaboration features</li>
              <li>Resource management tools</li>
              <li>Customizable workspace</li>
            </ul>
          </div>
        )
      },
      '즐겨찾기': {
        title: '24/7 Support',
        content: (
          <div className="space-y-4">
            <p>
              Our dedicated support team is always ready to help you with any questions or issues.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Round-the-clock assistance</li>
              <li>Quick response times</li>
              <li>Expert guidance</li>
              <li>Comprehensive help resources</li>
            </ul>
          </div>
        )
      }
    };

    setDialogContent(content[feature]);
    setIsDialogOpen(true);
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>세모에 오신 것을 환영합니다</h1>
        <p className="subtitle">당신에게 적합한 동아리를 찾아보세요</p>
      </header>

      <main className="landing-content">
        <section className="landing-features-section">
          <h2>Our Features</h2>
          <div className="landing-features-grid">
            <div className="landing-feature-card">
              <h3>챗 봇</h3>
              <p>무엇이든 물어보세요</p>
              <Button 
                variant="secondary"
                onClick={() => handleFeatureClick('챗 봇')}
              >
                Learn More
              </Button>
            </div>
            <div className="landing-feature-card">
              <h3>검색 창</h3>
              <p>원하는 동아리를 바로 확인할 수 있어요</p>
              <Button 
                variant="secondary"
                onClick={() => handleFeatureClick('검색 창')}
              >
                Learn More
              </Button>
            </div>
            <div className="landing-feature-card">
              <h3>즐겨찾기</h3>
              <p>원하는 동아리를 손쉽게 추가할 수 있어요</p>
              <Button 
                variant="secondary"
                onClick={() => handleFeatureClick('즐겨찾기')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="landing-cta-section">
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
        <div className="landing-footer-content">
          <div className="landing-footer-section">
            <h4>About Us</h4>
            <Button 
              variant="outline"
              to="/about"
            >
              About
            </Button>
          </div>
          <div className="landing-footer-section">
            <h4>Contact</h4>
            <Button 
              variant="outline"
              href="https://github.com/SejongOSS/triangle"
            >
              Github Page
            </Button>
          </div>
          <div className="landing-footer-section">
            <h4>Resources</h4>
            <Button 
              variant="outline"
              href="http://www.sejong.ac.kr/"
            >
              Sejong Page
            </Button>
          </div>
        </div>
      </footer>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={dialogContent.title}
      >
        {dialogContent.content}
      </Dialog>
    </div>
  );
};

export default LandingPage;