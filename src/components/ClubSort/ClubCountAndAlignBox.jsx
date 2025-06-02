// ClubCountAndAlignBox 컴포넌트 - 동아리 개수 표시와 정렬 옵션을 제공하는 컴포넌트
import React from "react";
import './ClubCountAndAlignBox.css';
import SortDropdown from "../ClubSort/SortDropDown"

// props 설명
// count: 전체 동아리 개수
// handleSort: 정렬 옵션 변경 시 호출되는 콜백 함수
const ClubCountAndAlignBox = ({count, handleSort}) => {
    return(
        <div className="ClubCountAndAlignBox_container">
            {/* 동아리 개수 표시 */}
            <div className="ClubCountAndAlignBox_label">총 {count}개의 동아리</div>
            {/* 정렬 드롭다운 */}
            <SortDropdown onSelect={handleSort} />
        </div>
    );
}

export default ClubCountAndAlignBox;