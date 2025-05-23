import React from "react";
import '../../index.css';
import './clubDetailTitle.css';
import clubImg from '../../assets/images/sejong_logo.png';

const ClubDetailTitle = () => {
    return(
        <div id="clubDetailTitleContainer">
            <img
                src={clubImg}
                alt="동아리프로필"
                id="clubImg"
            />
            <div id="clubTextContainer">
                <div id="clubTitle">동아리명</div>
                <div id="subtitle">
                    <span id="category">분류</span>
                    <span id="midLine">|</span>
                    <span id="subcategory">상세분류</span>
                </div>
            </div>
        </div>
    );
}

export default ClubDetailTitle;