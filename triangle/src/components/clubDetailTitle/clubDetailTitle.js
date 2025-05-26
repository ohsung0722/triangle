import React from "react";
import '../../index.css';
import './clubDetailTitle.css';
import clubImg from '../../assets/images/sejong_logo.png';

const ClubDetailTitle = ( { club } ) => {

    const { name, category, area } = club;

    return(
        <div className="clubDetailTitle_Container">
            <img
                src={clubImg}
                alt="동아리프로필"
                className="clubDetailTitle_clubImg"
            />
            <div className="clubDetailTitle_clubTextContainer">
                <div className="clubDetailTitle_clubTitle">{name}</div>
                <div className="clubDetailTitle_subtitle">
                    <span>{category}</span> | <span>{area}</span>
                </div>
            </div>
        </div>
    );
}

export default ClubDetailTitle;