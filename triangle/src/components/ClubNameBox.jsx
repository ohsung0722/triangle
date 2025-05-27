import React, { useState, useEffect } from "react";
import './ClubNameBox.css';

import starIcon from '../assets/images/star.svg';
import filledStarIcon from '../assets/images/filled_star.svg';

// name   : 동아리 이름
// type   : 분과
// detail : 분야
const ClubNameBox = ({ name, type, detail }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('favoriteClubs')) || [];
      setIsActive(stored.includes(name));
    } catch (e) {
      console.error('Failed to parse favoriteClubs from localStorage', e);
    }
  }, [name]);

  const handleIsActive = (e) => {
    e.stopPropagation();
    setIsActive((prev) => {
      const next = !prev;
      try {
        const stored = JSON.parse(localStorage.getItem('favoriteClubs')) || [];
        let updated;
        if (next) {
          updated = Array.from(new Set([...stored, name]));
        } else {
          updated = stored.filter((n) => n !== name);
        }
        localStorage.setItem('favoriteClubs', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to update favoriteClubs in localStorage', e);
      }
      return next;
    });
  };


  const getCategoryColor = (type) => {
    switch (type) {
      case '공연분과': return "#f06292";
      case '체육분과': return "#ED1C24";
      case '봉사분과': return "#81c784";
      case '문화분과': return "#ba68c8";
      case '학술분과': return "#64b5f6";
      case '종교분과': return "#ffb74d";
      default:
        return "#000";
    }
  };

  return (
    <div className="ClubNameBox_Container">
      <div>
        <h1>{name}</h1>
        <label className="ClubNameBox_Category" style={{ color: getCategoryColor(type) }}>{type}</label>
        <label className="ClubNameBox_label">{detail}</label>
      </div>
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
