// ClubInfo 페이지 - 동아리 상세 정보를 보여주는 페이지 컴포넌트
import React, { useEffect, useState } from 'react';
import '../../index.css';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ClubinfoBox from '../../components/ClubinfoBox/ClubinfoBox';
import ClubDetailTitle from '../../components/clubDetailTitle/clubDetailTitle';
import clubData from '../../constants/sejong_all_clubs.json';
import './ClubInfo.css';
import clubImage from '../../assets/images/sejong_view.png';

const ClubInfo = () => {
  // URL에서 동아리 ID 파라미터 가져오기
  const { id } = useParams();
  // 선택된 동아리 정보 상태 관리
  const [club, setClub] = useState(null);

  // 동아리 ID가 변경될 때마다 해당 동아리 정보 로드
  useEffect(() => {
    const selectedClub = clubData.find(club => club.id === Number(id));
    setClub(selectedClub);
  }, [id]);

  // 동아리 정보가 없는 경우 처리
  if (!club) {
    return <div>동아리 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="ClubInfo_clubInfoContainer">
      <div className="ClubInfo_Section">
        {/* 동아리 제목 및 기본 정보 섹션 */}
        <div className="ClubInfo_section1">
          <ClubDetailTitle club={club} />
        </div>

        {/* 동아리 상세 정보 및 모집 버튼 섹션 */}
        <div className="ClubInfo_section2">
          <div className="ClubInfo_BoxSection">
            <ClubinfoBox club={club} />
          </div>
          <div className="ClubInfo_ButtonSection">
            <Button size="large" variant="secondary" onClick={() => alert("모집이 마감되었습니다.")}>모집마감</Button>
          </div>
        </div>

        {/* 동아리 소개 섹션 */}
        <div className="ClubInfo_section3">
          <div className="ClubInfo_clubIntro">동아리 소개</div>
          <div className="ClubInfo_TextSection">
            {/* 동아리 이미지 섹션 */}
            <div className="ClubInfo_TextStart">동아리 소개 - 이미지</div>
            <div className="ClubInfo_clubImage">
              <img
                src={clubImage}
                alt="동아리사진"
              />
            </div>
            {/* 동아리 설명 목록 */}
            <ul className="ClubInfo_DescriptionList">
              {club.detail.description.map((paragraph, index) => {
                // 짝수 인덱스는 제목, 홀수 인덱스는 내용으로 처리
                const isTitle = index % 2 === 0;
                const content = paragraph.split('\n');

                return (
                  <li key={index} className={isTitle ? "ClubInfo_DescriptionTitle" : "ClubInfo_DescriptionParagraph"}>
                    {isTitle ? (
                      <span>{paragraph}</span>
                    ) : (
                      content.map((line, i) => (
                        <span key={i} style={{ display: 'block' }}>{line}</span>
                      ))
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="ClubInfo_Bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ClubInfo };