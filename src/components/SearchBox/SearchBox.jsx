// SearchBox 컴포넌트 - 동아리 검색을 위한 검색창 컴포넌트
import React , { useState } from "react";
import './SearchBox.css';
import searchIcon from '../../assets/images/search_icon.svg';

// props 설명
// onSearch: 검색어 입력 시 호출되는 콜백 함수
const SearchBox=({onSearch})=>{
    // 검색어 상태 관리
    const [searchValue, setSearchValue] = useState('');

    // 검색어 입력값 변경 핸들러
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    // 엔터키 입력 핸들러
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchValue);
        }
    };

    return(
        <div className="SearchBox_input">
            {/* 검색 입력창 */}
            <input 
                type="search"
                placeholder="검색"
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
            />
            {/* 검색 아이콘 */}
            <img
                src={searchIcon}
                alt="search"
                className="SearchBox_input_icon"
            />
        </div>
    )
}

export default SearchBox;