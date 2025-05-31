import React from "react";
import "./ClubCountInfoBox.css";

const ClubCountInfoBox = ({ name, totalCount, favoriteCount, rate }) => {
  const colors = {
    봉사분과: "#FFC8A2",
    종교분과: "#FFD1DC",
    문화분과: "#C9C9FF",
    체육분과: "#D2F6C5",
    공연분과: "#FFFFB3",
    학술분과: "#C2F6FF",
  };

  const categoryColor = colors[name] || "#E5E7EB";

  return (
    <div
      className="ClubCountInfoBox_chart_card"
      style={{ borderTop: `5px solid ${categoryColor}` }}
    >
      <div
        className="ClubCountInfoBox_card_header"
      >
        <h2 style={{ margin: 0, padding: "8px 12px", color: "#1F2937" }}>
          {name}
        </h2>
      </div>
      <div className="ClubCountInfoBox_count_container">
        <div className="ClubCountInfoBox_count_item">
          <div className="ClubCountInfoBox_count_label">
            전체
          </div>
          <div className="ClubCountInfoBox_count_value" style={{ color: categoryColor }}>{totalCount}</div>
        </div>
        <div className="ClubCountInfoBox_count_item">
          <div className="ClubCountInfoBox_count_label">즐겨찾기</div>
          <div className="ClubCountInfoBox_count_value" style={{ color: categoryColor }}>
            {favoriteCount}
          </div>
        </div>
      </div>
      <div className="ClubCountInfoBox_rate_text" >
        {rate}% 즐겨찾기 비율
      </div>
    </div>
  );
};

export default ClubCountInfoBox;
