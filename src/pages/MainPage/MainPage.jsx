import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './MainPage.css';
import SearchBox from "../../components/SearchBox/SearchBox";
import ClubCountAndAlignBox from "../../components/ClubSort/ClubCountAndAlignBox";
import ClubCategoryBox from "../../components/ClubCategoryBox/ClubCategoryBox";
import ClubData from "../../constants/sejong_all_clubs.json"
import ClubNameBox from "../../components/ClubNameBox/ClubNameBox";

const MainPage = () => {
  const [selectedCategories, setSelectedCategories] = useState(["전체"]);
  const [sortType, setSortType] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [favoriteClubs, setFavoriteClubs] = useState([]);
  const navigate = useNavigate();

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
  loadFavoriteClubs(); 
}, []);

  const loadFavoriteClubs = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('favoriteClubs')) || [];
      setFavoriteClubs(stored);
    } catch (e) {
      console.error('Failed to parse favoriteClubs from localStorage', e);
    }
  };


  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handleSort = (sort) => {
    setSortType(sort);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filtered = ClubData.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.trim().toLowerCase());

    if (selectedCategories.includes("즐겨찾기")) {
      return favoriteClubs.includes(club.name) && (searchTerm.trim() === '' || matchesSearch);
    }

    const inCategory = selectedCategories.includes("전체") || selectedCategories.includes(club.category);
    return inCategory && (searchTerm.trim() === '' || matchesSearch);
  });

  const sortedClubs = [...filtered].sort((a, b) => {
    if (sortType === 'name') {
      return a.name.localeCompare(b.name, 'ko');
    } else if (sortType === 'category') {
      return a.category.localeCompare(b.category, 'ko');
    } else {
      return 0;
    }
  });

  return (
    <div className="MainPage_container">
      <SearchBox onSearch={handleSearch} />
      <ClubCountAndAlignBox count={sortedClubs.length} handleSort={handleSort} />
      <ClubCategoryBox onChange={handleCategoryChange} />
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
