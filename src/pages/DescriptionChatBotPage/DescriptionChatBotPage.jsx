// DescriptionChatBotPage - AI 챗봇 기능을 소개하는 랜딩 페이지 컴포넌트
import React, { useRef, useState } from "react";
import "./DescriptionChatBotPage.css";
import { ChatBot } from "../../components/ChatBot/ChatBot";
import { useScroll, useTransform } from "framer-motion";
import { motion,useInView } from "framer-motion";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";
import {
  Clock,
  Globe,
  MessageSquare,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { TestimonialCard } from "../../components/TestimonialCard/TestimonialCard";
import chatbotImage from "../../assets/images/chatbot_image.png";
import graphImage from '../../assets/images/graph.png'
import { useNavigate } from 'react-router-dom';
import { FavoriteSection } from "../../components/FavoriteSection/FavoriteSection";

//랜딩페이지
function DescriptionChatBotPage() {
  // 스크롤 애니메이션을 위한 ref와 설정
  const targetRef = useRef(null);
  const demoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  // 스크롤에 따른 애니메이션 값 설정
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  // 데모 섹션 뷰포트 감지
  const isDemoInView = useInView(demoRef, {
    margin: '-100px',
    amount: 0.5,
  })
  
  const navigate = useNavigate();

  return (
    <div className="description-landing-page">
      {/* AI 챗봇 컴포넌트 */}
      <ChatBot highlight={isDemoInView}/>
      
      {/* 히어로 섹션 */}
      <motion.section
        ref={targetRef}
        className="description-section description-hero-section"
        style={{ opacity, scale, y }}
      >
        {/* 배경 애니메이션 요소 */}
        <div className="floating-shapes">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="shape"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* 히어로 섹션 콘텐츠 */}
        <div className="description-hero-content">
          <motion.h1
            className="description-hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            '세모'만의 차별화된 기능으로 
            <br />
            동아리 검색의 혁신을 경험하세요
          </motion.h1>
          <motion.p
            className="description-hero-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            스마트한 AI 챗봇 솔루션, 그래프 분석, 즐겨찾기 시스템을 제공하는 <br></br>새로운 플랫폼 '세모'를 만나보세요.
          </motion.p> 
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="description-hero-button" onClick={() => navigate('/main')}>지금 시작하기</button>
          </motion.div>
        </div>
      </motion.section>

      {/* 주요 기능 소개 섹션 */}
      <section className="description-section description-features-section">
        <SectionTitle
          title="강력한 기능"
          subtitle="AI 기반 챗봇으로 당신에게 맞는 동아리를 찾아보세요"
        />

        {/* 기능 카드 그리드 */}
        <div className="description-features-grid">
          <FeatureCard
            icon={Zap}
            title="실시간 응답"
            description="고객의 질문에 즉시 응답하여 대기 시간을 최소화합니다."
            delay={0.1}
          />
          <FeatureCard
            icon={Shield}
            title="안전한 대화"
            description="모든 대화는 개인 컴퓨터에서만 동작하며 새로고침 시 기록은 삭제됩니다."
            delay={0.2}
          />
          <FeatureCard
            icon={Clock}
            title="24/7 지원"
            description="하루 24시간, 일주일 내내 중단 없는 동아리 질문 검색 서비스를 제공합니다."
            delay={0.3}
          />
          <FeatureCard
            icon={Sparkles}
            title="AI 학습"
            description="대화를 통해 지속적으로 학습하고 개선되는 지능형 시스템입니다."
            delay={0.4}
          />
          <FeatureCard
            icon={Globe}
            title="다국어 지원"
            description="전세계 사람과 원활한 소통이 가능한 다국어 지원 기능을 제공합니다."
            delay={0.5}
          />
          <FeatureCard
            icon={MessageSquare}
            title="맞춤형 대화"
            description="고객의 요구에 맞춰 개인화된 대화 경험을 제공합니다."
            delay={0.6}
          />
        </div>
      </section>

      {/* 챗봇 데모 섹션 */}
      <section className="description-section description-demo-section" ref={demoRef}>
        <div className="description-demo-container">
          <SectionTitle
            title="직접 경험해보세요"
            subtitle="오른쪽 하단의 챗봇 아이콘을 클릭하여 지금 바로 AI 챗봇을 체험해보세요"
          />

          <motion.div
            className="description-demo-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={chatbotImage}
              alt="챗봇 데모 이미지"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              width={800}
              height={500}
            />
          </motion.div>
        </div>
      </section>

      {/* 즐겨찾기 기능 소개 섹션 */}
      <section className="description-section">
          <FavoriteSection/>
      </section>

      {/* 그래프 분석 소개 섹션 */}
      <section className="description-section description-demo-section">
        <div className="description-demo-container">
          <SectionTitle
            title="스마트한 그래프 분석"
            subtitle="즐겨찾기를 기반으로 고객의 관심 동아리 분포를 분석합니다"
          />

          <motion.div
            className="description-demo-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={graphImage}
              alt="그래프 캡처 이미지"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              width={800}
              height={500}
            />
          </motion.div>
        </div>
      </section>

      {/* 사용자 후기 섹션 */}
      <section className="description-section description-testimonials-section">
        <SectionTitle
          title="체험 후기"
          subtitle="'세모'의 AI 챗봇을 사용한 학생들의 생생한 경험담을 확인하세요"
        />

        <div className="description-testimonials-grid">
          <TestimonialCard
            content="평소 어떤 동아리를 가입할지 고민을 많이 했었는데, 세모 덕분에 좋은 동아리에 가입해 즐거운 학교생활 보내고 있어요!"
            name="서상혁"
            title="프로 다이어터, 개발자 꿈나무"
            delay={0.1}
          />
          <TestimonialCard
            content="언제 어떤 질문을 해도 빠르게 답변해주는 챗봇 덕분에, 원하는 동아리의 모집 기간을 놓치지 않고 지원할 수 있었어요!"
            name="신혜연"
            title="극단적 비밀주의, 리버스 헬창"
            delay={0.2}
          />
          <TestimonialCard
            content="관심있는 동아리를 저장하고 확인이 바로 가능해서 너무 편리해요! 그래프로 동아리 종류를 한눈에 확인할 수 있는 것도 너무 편리한 것 같아요!"
            name="윤지영"
            title="엔샵 26기 지원자"
            delay={0.3}
          />
        </div>
      </section>

      {/* CTA(Call-to-Action) 섹션 */}
      <section className="description-section description-cta-section">
        <motion.div
          className="description-cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="description-cta-title">지금 바로 시작하세요</h2>
          <p className="description-cta-subtitle">
            '세모'와 함께 당신에게 꼭 맞는 동아리에서 학교생활을 즐길 준비가
            되셨나요?
          </p>
          <button className="description-cta-button" onClick={() => navigate('/main')}>무료로 시작하기</button>
        </motion.div>
      </section>
    </div>
  );
}

export { DescriptionChatBotPage };
