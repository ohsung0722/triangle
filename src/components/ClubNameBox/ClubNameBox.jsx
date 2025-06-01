// ClubNameBox 컴포넌트 - 동아리 이름, 분과, 분야 정보를 표시하고 즐겨찾기 기능을 제공하는 컴포넌트
import React, { useState, useEffect } from "react";
import './ClubNameBox.css';

import starIcon from '../../assets/images/star.svg';
import filledStarIcon from '../../assets/images/filled_star.svg';

// props 설명
// name   : 동아리 이름
// type   : 분과
// detail : 분야
// onToggleFavorite : 즐겨찾기 토글 시 호출되는 콜백 함수
const ClubNameBox = ({ name, type, detail, onToggleFavorite }) => {
  // 즐겨찾기 상태 관리
  const [isActive, setIsActive] = useState(false);

  // 컴포넌트 마운트 시 localStorage에서 즐겨찾기 상태 불러오기
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('favoriteClubs')) || [];
      setIsActive(stored.includes(name));
    } catch (e) {
      console.error('Failed to parse favoriteClubs from localStorage', e);
    }
  }, [name]);

  // 즐겨찾기 토글 처리 함수
  const handleIsActive = (e) => {
    e.stopPropagation();
    setIsActive((prev) => {
      const next = !prev;
      try {
        // localStorage에서 즐겨찾기 목록 가져오기
        const stored = JSON.parse(localStorage.getItem('favoriteClubs')) || [];
        let updated;
        if (next) {
          // 즐겨찾기 추가
          updated = Array.from(new Set([...stored, name]));
        } else {
          // 즐겨찾기 제거
          updated = stored.filter((n) => n !== name);
        }
        // localStorage 업데이트
        localStorage.setItem('favoriteClubs', JSON.stringify(updated));

        // 부모 컴포넌트에 변경사항 알림
        if (onToggleFavorite) {
          onToggleFavorite();
        }

      } catch (e) {
        console.error('Failed to update favoriteClubs in localStorage', e);
      }
      return next;
    });
  };

  // 분과별 색상 반환 함수
  const getCategoryColor = (type) => {
    switch (type) {
      case '공연분과': return "#f06292";  // 분홍색
      case '체육분과': return "#ED1C24";  // 빨간색
      case '봉사분과': return "#81c784";  // 초록색
      case '문화분과': return "#ba68c8";  // 보라색
      case '학술분과': return "#64b5f6";  // 파란색
      case '종교분과': return "#ffb74d";  // 주황색
      default:
        return "#000";
    }
  };

  return (
    <div className="ClubNameBox_Container">
      {/* 동아리 정보 영역 */}
      <div>
        <h1>{name}</h1>
        <label className="ClubNameBox_Category" style={{ color: getCategoryColor(type) }}>{type}</label>
        <label className="ClubNameBox_label">{detail}</label>
      </div>
      {/* 즐겨찾기 버튼 */}
      <div className="ClubNameBox_icon_wrapper" onClick={handleIsActive}>
        <img
          src={isActive ? filledStarIcon : starIcon}
          alt="like"
          className="ClubNameBox_icon"
        />
      </div>
    </div>
  );
};

export default ClubNameBox;
