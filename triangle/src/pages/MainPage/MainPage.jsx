import React,{useState} from "react";
import './MainPage.css';
import SearchBox from "../../components/SearchBox";
import ClubCountAndAlignBox from "../../components/ClubSort/ClubCountAndAlignBox";
import ClubCategoryBox from "../../components/ClubCategoryBox";
import ClubData from "../../constants/sejong_all_clubs.json"
import ClubNameBox from "../../components/ClubNameBox";

const MainPage = ()=>{
    const [selectedCategories, setSelectedCategories] = useState(["전체"]);

    const handleCategoryChange = (categories) => {
        setSelectedCategories(categories);
    };

    const filteredClubs = ClubData.filter(club => {
        if (selectedCategories.includes("전체")) return true;
        return selectedCategories.includes(club.category);
    });

    return(
        <div className="MainPage_container">
            <SearchBox />
            <ClubCountAndAlignBox count={filteredClubs.length}/>
            <ClubCategoryBox onChange={handleCategoryChange}/>
            <div className="MainPage_ClubList">
                {filteredClubs.map((club, index) => (
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