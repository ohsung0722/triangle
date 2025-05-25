import React from "react";
import '../../index.css';
import './clubDetailTitle.css';
import clubImg from '../../assets/images/sejong_logo.png';

const ClubDetailTitle = ( { club } ) => {

    const { name, category, area } = club;

    return(
        <div id="clubDetailTitleContainer">
            <img
                src={clubImg}
                alt="동아리프로필"
                id="clubImg"
            />
            <div id="clubTextContainer">
                <div id="clubTitle">{name}</div>
                <div id="subtitle">
                    <span>{category}</span> | <span>{area}</span>
                </div>
            </div>
        </div>
    );
}

export default ClubDetailTitle;