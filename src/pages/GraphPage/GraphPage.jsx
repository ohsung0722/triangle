// GraphPage - 동아리 분포 현황을 그래프로 보여주는 페이지 컴포넌트
import React, { useState, useEffect } from "react";
import './GraphPage.css';
import PieGraph from "../../components/PieGraph/PieGraph";
import ClubData from "../../constants/sejong_all_clubs.json";
import ClubCountInfoBox from "../../components/ClubCountInfoBox/ClubCountInfoBox";

const GraphPage = () => {
  // 즐겨찾기한 동아리 목록 상태 관리
  const [favorites, setFavorites] = useState([]);

  // 로컬 스토리지에서 즐겨찾기 데이터 로드 및 변경 감지
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favoriteClubs')) || [];
    setFavorites(stored);

    const handleStorage = (e) => {
      if (e.key === 'favoriteClubs') {
        setFavorites(JSON.parse(e.newValue) || []);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // 전체 동아리 카테고리별 개수 계산
  const allCounts = Object.entries(
    ClubData.reduce((acc, club) => {
      acc[club.category] = (acc[club.category] || 0) + 1;
      return acc;
    }, {})
  )
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => a.count - b.count);

  // 즐겨찾기한 동아리 카테고리별 개수 계산
  const favoriteData = ClubData.filter((club) =>
    favorites.includes(club.name)
  );
  const favCounts = Object.entries(
    favoriteData.reduce((acc, club) => {
      acc[club.category] = (acc[club.category] || 0) + 1;
      return acc;
    }, {})
  )
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => a.count - b.count);

  return (
    <div className="GraphPage_container">
      {/* 페이지 헤더 */}
      <div className="GraphPage_header">
        <h1>동아리 현황 분석</h1>
        <p>동아리 카테고리별 분포도와 즐겨찾기 동아리 현황을 살펴보세요.</p>
      </div>

      {/* 그래프 섹션 */}
      <div className="GraphPage_charts-grid">
        {/* 전체 동아리 현황 그래프 */}
        <div className="GraphPage_chart-card">
          <div className="GraphPage_card-header">
            <h2>세종대 동아리 현황</h2>
          </div>
          <div className="GraphPage_chart-container">
            <PieGraph data={allCounts} />
          </div>
        </div>

        {/* 즐겨찾기 동아리 현황 그래프 */}
        <div className="GraphPage_chart-card">
          <div className="GraphPage_card-header">
            <h2>즐겨찾기한 동아리 현황</h2>
          </div>
          <div className="GraphPage_chart-container">
            {
              favCounts.length > 0
                ? <PieGraph data={favCounts} />
                : <p style={{ textAlign: 'center', color: '#6b7280', width:'600px' }}>
                    아직 즐겨찾기한 동아리가 없습니다.
                  </p>
            }
          </div>
        </div>
      </div>

      {/* 카테고리별 상세 정보 박스 */}
      <div className="GraphPage_info-boxes">
        {allCounts.map(({ category, count }) => {
          const favObj = favCounts.find((f) => f.category === category);
          const favCountForCategory = favObj ? favObj.count : 0;
          // 즐겨찾기 비율 계산
          const rate =
            count > 0
              ? Math.round((favCountForCategory / count) * 100)
              : 0;

          return (
            <ClubCountInfoBox
              key={category}
              name={category}               
              totalCount={count}           
              favoriteCount={favCountForCategory}
              rate={rate}                  
            />
          );
        })}
      </div>
    </div>
  );
};

export default GraphPage;
