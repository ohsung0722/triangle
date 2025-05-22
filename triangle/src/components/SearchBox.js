import React , { useState } from "react";
import './SearchBox.css';
import searchIcon from '../assets/images/search_icon.svg';

const SearchBox=()=>{
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    return(
        <div className="SearchBox_input">
            <input 
                type="search"
                placeholder="검색"
                onChange={handleSearchChange}
            />
            <img
                src={searchIcon}
                alt="search"
                className="SearchBox_input_icon"
      />
        </div>
    )
}

export default SearchBox;