import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { authService } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useLoginAPI } from '../../Context/Firebase/LoginContext';

const ChooseMode = () => {
  const [init, setInit] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useLoginAPI()!;

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      //추가로 , 여기에 이제 로그인하면 contextapi로 userObj등록하는 로직 추가해야 함
      if (user) {
        setIsLoggedIn(true);
      }
      if (!user) {
        setIsLoggedIn(false);
      }

      setInit(true);
    });
  }, []);

  return (
    <div>
      <h1>모드를 선택하세요</h1>
      {init ? (
        isLoggedIn ? (
          <>
            <Link to={'/guest'}>게스트 모드</Link>
            <Link to={'/main-select'}>00님 안녕하세요!</Link>
            {/* 로그인 페이지에서 피파 온라인 닉네임 등록하는거 추가하고 여기다가 00님 안녕하세요! 추가하기 */}
          </>
        ) : (
          <>
            <Link to={'/guest'}>게스트 모드</Link>
            <Link to={'/login'}>로그인 하기(Google)</Link>
          </>
        )
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default ChooseMode;
