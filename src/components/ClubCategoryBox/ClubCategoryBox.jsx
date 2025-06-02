// ClubCategoryBox 컴포넌트 - 동아리 카테고리 선택을 위한 컴포넌트
import React, { useState } from "react";
import './ClubCategoryBox.css';

const ClubCategoryBox = ({ onChange }) => {
  // 카테고리 목록 정의
  const category = ["전체", "즐겨찾기", "공연분과", "체육분과", "봉사분과", "문화분과", "학술분과", "종교분과"];
  // 선택된 카테고리 상태 관리
  const [selected, setSelected] = useState(["전체"]);

  // 카테고리 클릭 처리 함수
  const handleClick = (item) => {
    let newSelected;

    // '전체' 카테고리 선택 시
    if (item === "전체") {
      newSelected = ["전체"];
    } 
    // '즐겨찾기' 카테고리 선택 시
    else if (item === "즐겨찾기") {
      newSelected = ["즐겨찾기"]; // '전체'처럼 단독 선택되도록
    } 
    // 일반 분류 선택 시
    else {
      // '전체'와 '즐겨찾기' 해제
      newSelected = selected.filter(cat => cat !== "전체" && cat !== "즐겨찾기");

      // 이미 선택된 카테고리면 제거, 아니면 추가
      if (selected.includes(item)) {
        newSelected = newSelected.filter(cat => cat !== item);
        // 선택된 카테고리가 없으면 '전체'로 설정
        if (newSelected.length === 0) newSelected = ["전체"];
      } else {
        newSelected = [...newSelected, item];
      }
    }

    // 선택된 카테고리 상태 업데이트
    setSelected(newSelected);
    // 부모 컴포넌트에 변경사항 전달
    if (onChange) {
      onChange(newSelected);
    }
  };

  return (
    <div className="ClubCategoryBox_container">
      {/* 카테고리 목록 렌더링 */}
      {category.map((item) => (
        <span
          key={item}
          className={`ClubCategoryBox_label ${selected.includes(item) ? 'selected' : ''}`}
          onClick={() => handleClick(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default ClubCategoryBox;
