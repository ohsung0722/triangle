import React, { useState, useEffect } from "react";
import './GraphPage.css';
import PieGraph from "../../components/PieGraph/PieGraph";
import ClubData from "../../constants/sejong_all_clubs.json";

const GraphPage = () => {
  const [favorites, setFavorites] = useState([]);

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

  const allCounts = Object.entries(
    ClubData.reduce((acc, club) => {
      acc[club.category] = (acc[club.category] || 0) + 1;
      return acc;
    }, {})
  )
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => a.count - b.count);

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
      <div className="GraphPage_header">
        <h1>동아리 현황 분석</h1>
        <p>동아리 카테고리별 분포도와 즐겨찾기 동아리 현황을 살펴보세요.</p>
      </div>
      <div className="GraphPage_charts-grid">
        <div className="GraphPage_chart-card">
          <div className="GraphPage_card-header">
            <h2>세종대 동아리 현황</h2>
          </div>
          <div className="GraphPage_chart-container">
            <PieGraph data={allCounts} />
          </div>
        </div>
        <div className="GraphPage_chart-card">
          <div className="GraphPage_card-header">
            <h2>즐겨찾기한 동아리 현황</h2>
          </div>
          <div className="GraphPage_chart-container">
            {
              favCounts.length > 0
                ? <PieGraph data={favCounts} />
                : <p style={{ textAlign: 'center', color: '#6b7280' }}>
                    아직 즐겨찾기한 동아리가 없습니다.
                  </p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphPage;
