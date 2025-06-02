// LandingPage - 웹사이트의 첫 화면을 보여주는 랜딩 페이지 컴포넌트
import React, { useState } from 'react';
import Dialog from '../../components/Dialog/Dialog';
import Button from '../../components/Button/Button';
import './LandingPage.css';

const LandingPage = () => {
  // 다이얼로그 상태 관리
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: '',
    content: ''
  });

  // 기능 버튼 클릭 핸들러
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
      {/* 페이지 헤더 */}
      <header className="landing-header">
        <h1>세모에 오신 것을 환영합니다</h1>
        <p className="subtitle">당신에게 적합한 동아리를 찾아보세요</p>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="landing-content">
        {/* 주요 기능 소개 섹션 */}
        <section className="landing-features-section">
          <h2>Our Features</h2>
          <div className="landing-features-grid">
            {/* 챗봇 기능 카드 */}
            <div className="landing-feature-card">
              <h3>챗 봇</h3>
              <p>무엇이든 물어보세요</p>
              <Button 
                variant="secondary"
                to="/chatbot"
              >
                Learn More
              </Button>
            </div>
            {/* 검색 기능 카드 */}
            <div className="landing-feature-card">
              <h3>검색 창</h3>
              <p>원하는 동아리를 바로 확인할 수 있어요</p>
              <Button 
                variant="secondary"
              >
                Learn More
              </Button>
            </div>
            {/* 즐겨찾기 기능 카드 */}
            <div className="landing-feature-card">
              <h3>즐겨찾기</h3>
              <p>원하는 동아리를 손쉽게 추가할 수 있어요</p>
              <Button 
                variant="secondary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* CTA(Call-to-Action) 섹션 */}
        <section className="landing-cta-section">
          <h2>지금 바로 시작하세요</h2>
          <p>당신에게 적합한 동아리를 찾아보세요</p>
          <Button 
            size="large" 
            variant="primary"
            to="/main"
          >
            Get Started
          </Button>
        </section>
      </main>

      {/* 푸터 섹션 */}
      <footer className="landing-footer">
        <div className="landing-footer-content">
          {/* About Us 섹션 */}
          <div className="landing-footer-section">
            <h4>About Us</h4>
            <Button 
              variant="outline"
              onClick={() => handleFeatureClick('About')}
            >
              About US
            </Button>
          </div>
          {/* Contact 섹션 */}
          <div className="landing-footer-section">
            <h4>Contact</h4>
            <Button 
              variant="outline"
              href="https://github.com/SejongOSS/triangle"
            >
              Github Page
            </Button>
          </div>
          {/* Resources 섹션 */}
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
    </div>
  );
};

export default LandingPage;