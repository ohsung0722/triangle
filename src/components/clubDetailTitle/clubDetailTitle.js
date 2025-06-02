// ClubDetailTitle 컴포넌트 - 동아리 상세 페이지의 제목과 기본 정보를 표시하는 컴포넌트
import React from "react";
import '../../index.css';
import './clubDetailTitle.css';
import clubImg from '../../assets/images/sejong_logo.png';

// props 설명
// club: 동아리 정보 객체 (name, category, area 포함)
const ClubDetailTitle = ({ club }) => {
    const { name, category, area } = club;

    // 분과별 색상 반환 함수
    const TitleGetCategoryColor = (category) => {   
        switch (category) {
            case '공연분과': return "#f06292";  // 분홍색
            case '체육분과': return "#ED1C24";  // 빨간색
            case '봉사분과': return "#81c784";  // 초록색
            case '문화분과': return "#ba68c8";  // 보라색
            case '학술분과': return "#64b5f6";  // 파란색
            case '종교분과': return "#ffb74d";  // 주황색
            default:
                return "#000";
        }
    };

    return(
        <div className="clubDetailTitle_Container">
            {/* 동아리 프로필 이미지 */}
            <img
                src={clubImg}
                alt="동아리프로필"
                className="clubDetailTitle_clubImg"
            />
            {/* 동아리 정보 컨테이너 */}
            <div className="clubDetailTitle_clubTextContainer">
                {/* 동아리명 */}
                <div className="clubDetailTitle_clubTitle">{name}</div>
                {/* 분과 및 분야 정보 */}
                <div className="clubDetailTitle_subtitle">
                    <span style={{ color: TitleGetCategoryColor(category) }}>{category}</span> | <span>{area}</span>
                </div>
            </div>
        </div>
    );
}

export default ClubDetailTitle;