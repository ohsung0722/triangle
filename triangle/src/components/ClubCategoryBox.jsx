import React, { useState } from "react";
import './ClubCategoryBox.css';

const ClubCategoryBox = ({ onChange }) => {
  const category = ["전체", "즐겨찾기", "공연분과", "체육분과", "봉사분과", "문화분과", "학술분과", "종교분과"];
  const [selected, setSelected] = useState(["전체"]);

  const handleClick = (item) => {
    let newSelected;

    if (item === "전체") {
      newSelected = ["전체"];
    } else if (item === "즐겨찾기") {
      newSelected = ["즐겨찾기"]; // 🎯 '전체'처럼 단독 선택되도록
    } else {
      // 🎯 일반 분류 클릭 시 '전체'와 '즐겨찾기' 해제
      newSelected = selected.filter(cat => cat !== "전체" && cat !== "즐겨찾기");

      if (selected.includes(item)) {
        newSelected = newSelected.filter(cat => cat !== item);
        if (newSelected.length === 0) newSelected = ["전체"];
      } else {
        newSelected = [...newSelected, item];
      }
    }

    setSelected(newSelected);
    if (onChange) {
      onChange(newSelected);
    }
  };

  return (
    <div className="ClubCategoryBox_container">
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
