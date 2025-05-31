import React from "react";
import '../../index.css';
import './clubDetailTitle.css';
import clubImg from '../../assets/images/sejong_logo.png';

const ClubDetailTitle = ( { club } ) => {

    const { name, category, area } = club;

    const TitleGetCategoryColor = (category) => {   
    switch (category) {
      case '공연분과': return "#f06292";
      case '체육분과': return "#ED1C24";
      case '봉사분과': return "#81c784";
      case '문화분과': return "#ba68c8";
      case '학술분과': return "#64b5f6";
      case '종교분과': return "#ffb74d";
      default:
        return "#000";
    }
  };

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
                    <span style={ {color : TitleGetCategoryColor(category) } }>{category}</span> | <span>{area}</span>
                </div>
            </div>
        </div>
    );
}

export default ClubDetailTitle;