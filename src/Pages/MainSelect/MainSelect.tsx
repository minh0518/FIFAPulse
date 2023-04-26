import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { authService, dbService } from '../../../firebase';
import FIFAData from '../../Services/FifaData';

const MainSelect = () => {
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

  return (
    <div>
      <div>
        <Link to="my-record">내 기록</Link>
      </div>
      <div>
        <Link to="position-guide">선수 포지션 추천 가이드</Link>
      </div>
      <div>
        <Link to="user-record">다른 유저 검색하기</Link>
      </div>
      <div>
        <Link to="challenge">챌린지</Link>
      </div>
      <button type="button" onClick={onLogoutClick}>
        Log out
      </button>
    </div>
  );
};

export default MainSelect;
