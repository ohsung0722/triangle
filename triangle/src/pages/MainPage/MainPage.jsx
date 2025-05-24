import React,{useState} from "react";
import './MainPage.css';
import SearchBox from "../../components/SearchBox";
import ClubCountAndAlignBox from "../../components/ClubSort/ClubCountAndAlignBox";
import ClubCategoryBox from "../../components/ClubCategoryBox";
import ClubData from "../../constants/sejong_all_clubs.json"
import ClubNameBox from "../../components/ClubNameBox";

const MainPage = ()=>{
    const [selectedCategories, setSelectedCategories] = useState(["전체"]);
    const [sortType, setSortType] = useState('name');

    const handleCategoryChange = (categories) => {
        setSelectedCategories(categories);
    };

    const handleSort = sort => {
        setSortType(sort);
    };

    const filtered = ClubData.filter(club => {
        if (selectedCategories.includes("전체")) return true;
        return selectedCategories.includes(club.category);
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
            <SearchBox />
            <ClubCountAndAlignBox count={sortedClubs.length} handleSort={handleSort}/>
            <ClubCategoryBox onChange={handleCategoryChange}/>
            <div className="MainPage_ClubList">
                {sortedClubs.map((club, index) => (
                <ClubNameBox
                    key={index}
                    name={club.name}
                    type={club.category}
                    detail={club.area}
                />
            ))}
            </div>
            
        </div>
    )
}

export default MainPage;