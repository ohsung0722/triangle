// FavoriteSection 컴포넌트 - 즐겨찾기 기능을 소개하는 섹션 컴포넌트
import React from "react";
import { motion } from "framer-motion";
import { Star, Heart, Bookmark, Clock } from "lucide-react";
import "./FavoriteSection.css";

// 즐겨찾기 예시 데이터
const favoriteItems = [
  { text: "En#", starred: true },
  { text: "인터페이스", starred: true },
  { text: "Sound Plus", starred: true },
  { text: "유스호스텔", starred: false },
  { text: "판도라큐브", starred: true },
];

function FavoriteSection() {
  return (
    <div className="favorites-section">
      <div className="favorites-container">
        {/* 왼쪽 설명 영역 */}
        <motion.div
          className="favorites-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* 섹션 제목과 설명 */}
          <h2 className="favorites-title">스마트한 즐겨찾기 시스템</h2>
          <p className="favorites-subtitle">
            자주 찾거나 관심있는 동아리 정보를 즐겨찾기에 추가하여, 사용자가
            필요할 때 빠르게 접근할 수 있도록 도와줍니다.
          </p>

          {/* 주요 기능 목록 */}
          <div className="favorites-features">
            {/* 즐겨찾기 카테고리 기능 */}
            <motion.div
              className="favorites-feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="favorites-feature-icon-wrapper">
                <Star size={20} />
              </div>
              <span className="favorites-feature-text">즐겨찾기 카테고리</span>
            </motion.div>

            {/* 개인화된 추천 기능 */}
            <motion.div
              className="favorites-feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="favorites-feature-icon-wrapper">
                <Heart size={20} />
              </div>
              <span className="favorites-feature-text">개인화된 추천</span>
            </motion.div>

            {/* 빠른 북마크 접근 기능 */}
            <motion.div
              className="favorites-feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="favorites-feature-icon-wrapper">
                <Bookmark size={20} />
              </div>
              <span className="favorites-feature-text">빠른 북마크 접근</span>
            </motion.div>

            {/* 관심 기록 확인 기능 */}
            <motion.div
              className="favorites-feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="favorites-feature-icon-wrapper">
                <Clock size={20} />
              </div>
              <span className="favorites-feature-text">관심 기록 확인</span>
            </motion.div>
          </div>
        </motion.div>

        {/* 오른쪽 데모 영역 */}
        <motion.div
          className="favorites-demo"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 모바일 화면 데모 */}
          <div className="favorites-demo-phone">
            <div className="favorites-demo-screen">
              {/* 데모 헤더 */}
              <div className="favorites-demo-header">
                <span className="favorites-demo-title">즐겨찾기</span>
                <Star size={16} className="favorite-star" />
              </div>

              {/* 즐겨찾기 목록 */}
              <div className="favorites-list">
                {favoriteItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="favorite-item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="favorite-content">
                      <span className="favorite-text">{item.text}</span>
                    </div>
                    <Star
                      size={16}
                      className={item.starred ? "favorite-star" : ""}
                      fill={item.starred ? "currentColor" : "none"}
                    />
                  </motion.div>
                ))}
              </div>

              {/* 데모 하단 설명 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.2 }}
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  right: "1rem",
                  textAlign: "center",
                  fontSize: "0.75rem",
                  fontFamily: 'Pretendard-Semibold',
                  color: "#9ca3af",
                }}
              >
                사용자가 관심있는 동아리를 한눈에 확인하고 빠른 접근이 가능하도록 지원
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export {FavoriteSection}