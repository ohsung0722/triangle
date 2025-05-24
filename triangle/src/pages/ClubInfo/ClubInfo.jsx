import React, { useEffect, useState } from 'react';
import '../../index.css';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import ClubinfoBox from '../../components/ClubinfoBox/ClubinfoBox';
import ClubDetailTitle from '../../components/clubDetailTitle/clubDetailTitle';
import clubData from '../../constants/sejong_all_clubs.json';
import './ClubInfo.css';
import clubImage from '../../assets/images/sejong_view.png';

const ClubInfo = () => {
  const { id } = useParams(); // URL에서 id 받아오기
  const [club, setClub] = useState(null);

  useEffect(() => {
    const selectedClub = clubData.find(club => club.id === Number(id));
    setClub(selectedClub);
  }, [id]);

  if (!club) {
    return <div>동아리 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="ClubInfo_clubInfoContainer">

      <div className="ClubInfo_Section">
        <div className="ClubInfo_section1">
          <ClubDetailTitle
            club={club}
          />
        </div>

        <div className="ClubInfo_section2">
          <div className="ClubInfo_BoxSection">
            <ClubinfoBox club={club} />
          </div>
          <div className="ClubInfo_ButtonSection">
            <Button size="large" variant="secondary" onClick={() => alert("모집이 마감되었습니다.")}>모집마감</Button>
          </div>
        </div>

        <div className="ClubInfo_section3">
          <div className="ClubInfo_clubIntro">동아리 소개</div>
          <div className="ClubInfo_TextSection">
            <div className="ClubInfo_TextStart">동아리를 소개합니다.</div>
            <div className="ClubInfo_clubImage">
              <img
                src={clubImage}
                alt="동아리사진"
            />
            </div>
            <div className="ClubInfo_TextDetail">{club.detail.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ClubInfo };