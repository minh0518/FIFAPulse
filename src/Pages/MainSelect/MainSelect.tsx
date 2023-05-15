import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { Fade, Slide } from 'react-awesome-reveal';
import { useNavigate, Link } from 'react-router-dom';
import { ChallengeDiv, MainHeading, MyRecordDiv, PositionGuideDiv, UserRecordDiv } from './MainSelect.styled';
import { authService, dbService } from '../../../firebase';
import FIFAData from '../../Services/FifaData';

const MainSelect = () => {
  const [slideInfo, setSlideInfo] = useState({
    heading: true,
    myRecord: false,
    positionGuide: false,
    userRecord: false,
    gameChallenge: false,
  });

  const checkScroll = () => {
    console.log(window.pageYOffset);

    if (window.pageYOffset < 200) {
      setSlideInfo({
        heading: true,
        myRecord: false,
        positionGuide: false,
        userRecord: false,
        gameChallenge: false,
      });
    }
    if (window.pageYOffset >= 200) {
      setSlideInfo((prev) => {
        return { ...prev, myRecord: true };
      });
    }
    if (window.pageYOffset >= 700) {
      setSlideInfo((prev) => {
        return { ...prev, positionGuide: true };
      });
    }

    if (window.pageYOffset >= 1200) {
      setSlideInfo((prev) => {
        return { ...prev, userRecord: true };
      });
    }
    if (window.pageYOffset >= 1400) {
      setSlideInfo((prev) => {
        return { ...prev, gameChallenge: true };
      });
    }
  };

  const navigate = useNavigate();

  const onLogoutClick = () => {
    signOut(authService);
    navigate('/', { replace: true });
  };

  useEffect(() => {
    const getMeataData = async () => {
      const fifa = new FIFAData();
      const [matchType, seasonId, spid, division, spPosition] = await fifa.getInfoMetaData();
      localStorage.setItem('MetaData_spid', JSON.stringify(spid));
      localStorage.setItem('MetaData_matchType', JSON.stringify(matchType));
      localStorage.setItem('MetaData_seasonId', JSON.stringify(seasonId));
      localStorage.setItem('MetaData_division', JSON.stringify(division));
      localStorage.setItem('MetaData_spPosition', JSON.stringify(spPosition));
    };

    getMeataData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [slideInfo]);

  console.log(slideInfo);

  return (
    <div style={{ height: '3000px' }}>
      <MainHeading> 메인 문구 </MainHeading>

      <MyRecordDiv myRecord={slideInfo.myRecord}>
        <Slide triggerOnce>
          <Link to="my-record">내 기록</Link>
        </Slide>
      </MyRecordDiv>
      <PositionGuideDiv positionGuide={slideInfo.positionGuide}>
        <Slide triggerOnce>
          <Link to="position-guide">선수 포지션 추천 가이드</Link>
        </Slide>
      </PositionGuideDiv>
      <UserRecordDiv userRecord={slideInfo.userRecord}>
        <Slide triggerOnce>
          <Link to="user-record">다른 유저 검색하기</Link>
        </Slide>
      </UserRecordDiv>
      <ChallengeDiv gameChallenge={slideInfo.gameChallenge}>
        <Slide triggerOnce>
          <Link to="challenge">챌린지</Link>
        </Slide>
      </ChallengeDiv>
      <button type="button" onClick={onLogoutClick}>
        Log out
      </button>
    </div>
  );
};

export default MainSelect;
