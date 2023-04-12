import React from 'react';
import { Link } from 'react-router-dom';

const MainSelect = () => {
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
    </div>
  );
};

export default MainSelect;
