import React from "react";
import "./ClubCountInfoBox.css";

const ClubCountInfoBox = ({ name, totalCount, favoriteCount, rate }) => {
  const colors = {
    봉사분과: "#81c784",
    종교분과: "#ffb74d",
    문화분과: "#ba68c8",
    체육분과: "#ED1C24",
    공연분과: "#f06292",
    학술분과: "#64b5f6",
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
