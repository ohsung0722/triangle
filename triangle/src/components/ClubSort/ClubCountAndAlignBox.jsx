import React from "react";
import './ClubCountAndAlignBox.css';
import SortDropdown from "../ClubSort/SortDropDown"

const ClubCountAndAlignBox = ({count})=>{

    const handleSort = key => {
    console.log(key);
  };

    return(
        <div className="ClubCountAndAlignBox_container">
            <div className="ClubCountAndAlignBox_label">총 {count}개의 동아리</div>
            <SortDropdown onSelect={handleSort} />
        </div>
    );
}

export default ClubCountAndAlignBox;