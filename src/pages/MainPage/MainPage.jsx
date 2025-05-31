// MainPage - 동아리 목록을 보여주는 메인 페이지 컴포넌트
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './MainPage.css';
import SearchBox from "../../components/SearchBox/SearchBox";
import ClubCountAndAlignBox from "../../components/ClubSort/ClubCountAndAlignBox";
import ClubCategoryBox from "../../components/ClubCategoryBox/ClubCategoryBox";
import ClubData from "../../constants/sejong_all_clubs.json"
import ClubNameBox from "../../components/ClubNameBox/ClubNameBox";

const MainPage = () => {
  // 상태 관리
  const [selectedCategories, setSelectedCategories] = useState(["전체"]); // 선택된 카테고리
  const [sortType, setSortType] = useState('name'); // 정렬 방식
  const [searchTerm, setSearchTerm] = useState(''); // 검색어
  const [favoriteClubs, setFavoriteClubs] = useState([]); // 즐겨찾기한 동아리 목록
  const navigate = useNavigate();

  // 페이지 로드 시 스크롤을 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 페이지 로드 시 즐겨찾기 목록 로드
  useEffect(() => {
    loadFavoriteClubs(); 
  }, []);

  // 로컬 스토리지에서 즐겨찾기 목록 로드
  const loadFavoriteClubs = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('favoriteClubs')) || [];
      setFavoriteClubs(stored);
    } catch (e) {
      console.error('Failed to parse favoriteClubs from localStorage', e);
    }
  };

  // 카테고리 변경 핸들러
  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  // 정렬 방식 변경 핸들러
  const handleSort = (sort) => {
    setSortType(sort);
  };

  // 검색어 변경 핸들러
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // 동아리 목록 필터링
  const filtered = ClubData.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.trim().toLowerCase());

    // 즐겨찾기 카테고리 선택 시 처리
    if (selectedCategories.includes("즐겨찾기")) {
      return favoriteClubs.includes(club.name) && (searchTerm.trim() === '' || matchesSearch);
    }

    // 카테고리 및 검색어 필터링
    const inCategory = selectedCategories.includes("전체") || selectedCategories.includes(club.category);
    return inCategory && (searchTerm.trim() === '' || matchesSearch);
  });

  // 필터링된 동아리 목록 정렬
  const sortedClubs = [...filtered].sort((a, b) => {
    if (sortType === 'name') {
      return a.name.localeCompare(b.name, 'ko'); // 이름순 정렬
    } else if (sortType === 'category') {
      return a.category.localeCompare(b.category, 'ko'); // 카테고리순 정렬
    } else {
      return 0;
    }
  });

  return (
    <div className="MainPage_container">
      {/* 검색창 */}
      <SearchBox onSearch={handleSearch} />
      {/* 동아리 개수 및 정렬 옵션 */}
      <ClubCountAndAlignBox count={sortedClubs.length} handleSort={handleSort} />
      {/* 카테고리 필터 */}
      <ClubCategoryBox onChange={handleCategoryChange} />
      {/* 동아리 목록 */}
      <div className="MainPage_ClubList">
        {sortedClubs.map((club) => (
          <div
            key={club.id}
            onClick={() => navigate(`/main/club/${club.id}`)}
          >
            <ClubNameBox
              name={club.name}
              type={club.category}
              detail={club.area}
              onToggleFavorite={loadFavoriteClubs} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
