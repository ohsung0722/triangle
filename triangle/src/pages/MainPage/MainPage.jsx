import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './MainPage.css';
import SearchBox from "../../components/SearchBox";
import ClubCountAndAlignBox from "../../components/ClubSort/ClubCountAndAlignBox";
import ClubCategoryBox from "../../components/ClubCategoryBox";
import ClubData from "../../constants/sejong_all_clubs.json"
import ClubNameBox from "../../components/ClubNameBox";

const MainPage = ()=>{
    const [selectedCategories, setSelectedCategories] = useState(["전체"]);
    const [sortType, setSortType] = useState('name');
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleCategoryChange = (categories) => {
        setSelectedCategories(categories);
    };

    const handleSort = sort => {
        setSortType(sort);
    };
    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filtered = ClubData.filter(club => {
        const inCategory = selectedCategories.includes("전체") || selectedCategories.includes(club.category);
        const matchesSearch = club.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
        return inCategory && (searchTerm.trim() === '' || matchesSearch);
    });

    const sortedClubs = [...filtered].sort((a, b) => {
        if (sortType === 'name') {
            return a.name.localeCompare(b.name, 'ko'); 
        } else if (sortType === 'category') {
            return 0;
        } else {
            return 0;
        }
    });


    return(
        <div className="MainPage_container">
            <SearchBox onSearch={handleSearch}/>
            <ClubCountAndAlignBox count={sortedClubs.length} handleSort={handleSort}/>
            <ClubCategoryBox onChange={handleCategoryChange}/>
            <div className="MainPage_ClubList">
                {sortedClubs.map((club, index) => (
                <div
                    key={club.id}
                    onClick={() => navigate(`/club/${club.id}`)}
                >
                     <ClubNameBox
                        name={club.name}
                        type={club.category}
                        detail={club.area}
                    />
                </div>
            ))}
            </div>
            
        </div>
    )
}

export default MainPage;