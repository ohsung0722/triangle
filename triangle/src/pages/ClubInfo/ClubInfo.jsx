import React, { useEffect, useState } from 'react';
import '../../index.css';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import ClubinfoBox from '../../components/ClubinfoBox';
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
    <div className="clubInfoContainer">

      <div className="Section">
        <div className="section1">
          <ClubDetailTitle
            club={club}
          />
        </div>

        <div className="section2">
          <div className="BoxSection">
            <ClubinfoBox club={club} />
          </div>
          <div className="ButtonSection">
            <Button size="large" variant="secondary" onClick={() => alert("모집이 마감되었습니다.")}>모집마감</Button>
          </div>
        </div>

        <div className="section3">
          <div className="clubIntro">동아리 소개</div>
          <div className="TextSection">
            <div className="TextStart">동아리를 소개합니다.</div>
            <div className="clubImage">
              <img
                src={clubImage}
                alt="동아리사진"
            />
            </div>
            <div className="TextDetail">{club.detail.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ClubInfo };