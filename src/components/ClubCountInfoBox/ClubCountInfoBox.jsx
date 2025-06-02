// ClubCountInfoBox 컴포넌트 - 동아리 분과별 통계 정보를 표시하는 컴포넌트
import React from "react";
import "./ClubCountInfoBox.css";

const ClubCountInfoBox = ({ name, totalCount, favoriteCount, rate }) => {
  // 분과별 색상 매핑
  const colors = {
    봉사분과: "#81c784",  // 초록색
    종교분과: "#ffb74d",  // 주황색
    문화분과: "#ba68c8",  // 보라색
    체육분과: "#ED1C24",  // 빨간색
    공연분과: "#f06292",  // 분홍색
    학술분과: "#64b5f6",  // 파란색
  };

  // 해당 분과의 색상 가져오기 (없으면 회색)
  const categoryColor = colors[name] || "#E5E7EB";

  return (
    <div
      className="ClubCountInfoBox_chart_card"
      style={{ borderTop: `5px solid ${categoryColor}` }}
    >
      {/* 카드 헤더 - 분과명 표시 */}
      <div className="ClubCountInfoBox_card_header">
        <h2 style={{ margin: 0, padding: "8px 12px", color: "#1F2937" }}>
          {name}
        </h2>
      </div>
      {/* 통계 정보 컨테이너 */}
      <div className="ClubCountInfoBox_count_container">
        {/* 전체 동아리 수 표시 */}
        <div className="ClubCountInfoBox_count_item">
          <div className="ClubCountInfoBox_count_label">
            전체
          </div>
          <div className="ClubCountInfoBox_count_value" style={{ color: categoryColor }}>{totalCount}</div>
        </div>
        {/* 즐겨찾기 동아리 수 표시 */}
        <div className="ClubCountInfoBox_count_item">
          <div className="ClubCountInfoBox_count_label">즐겨찾기</div>
          <div className="ClubCountInfoBox_count_value" style={{ color: categoryColor }}>
            {favoriteCount}
          </div>
        </div>
      </div>
      {/* 즐겨찾기 비율 표시 */}
      <div className="ClubCountInfoBox_rate_text" >
        {rate}% 즐겨찾기 비율
      </div>
    </div>
  );
};

export default ClubCountInfoBox;
