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
      'About': {
        title: 'About Us',
        content: (
          <div className="space-y-4">
            <p>
              세종대학교 소프트웨어학과
            </p>
            <p>
            권오성, 서상혁, 신혜연, 윤지영 4명이 개발한 동아리 추천 서비스입니다.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>권오성: https://github.com/ohsung0722</li>
              <li>서상혁: https://github.com/SangHyeok0908</li>
              <li>신혜연: https://github.com/shymirr</li>
              <li>윤지영: https://github.com/yoon764</li>
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
                // onClick={() => handleFeatureClick('챗 봇')}
              >
                Learn More
              </Button>
            </div>
            <div className="landing-feature-card">
              <h3>검색 창</h3>
              <p>원하는 동아리를 바로 확인할 수 있어요</p>
              <Button 
                variant="secondary"
                // onClick={() => handleFeatureClick('검색 창')}
              >
                Learn More
              </Button>
            </div>
            <div className="landing-feature-card">
              <h3>즐겨찾기</h3>
              <p>원하는 동아리를 손쉽게 추가할 수 있어요</p>
              <Button 
                variant="secondary"
                // onClick={() => handleFeatureClick('즐겨찾기')}
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
              onClick={() => handleFeatureClick('About')}
            >
              About US
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