import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { authService } from '../../../firebase';
import { useLoginAPI } from '../../Context/Firebase/LoginContext';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../Context/ModalContext/ModalContext';
import AskNickName from '../../Components/AskNickName/AskNickName';

const ChooseModeAndLogin = () => {
  const [init, setInit] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useLoginAPI()!;

  const { isModalOpen, openModal, closeModal } = useModal();

  const navigate = useNavigate();

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

  const onSocialClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;

    let provider;

    if (name === 'google') {
      provider = new GoogleAuthProvider();
    }

    const data = await signInWithPopup(authService, provider as GoogleAuthProvider);

    // 조건에 따라 모달의 띄울지 안 띄울지 진행
    openModal(<AskNickName />);
  };

  return (
    <div>
      <h1>모드를 선택하세요</h1>
      {init ? ( //화면이 띄워지고 로그인 정보가 불러지기 전 후에 대한 조건부 렌더링
        isLoggedIn ? ( // 로그인이 됐을때의 조건부 렌더링
          isModalOpen ? ( // 로그인이 되고 만약 ID를 입력받아야 해서 모달창이 띄워진 것에 대한 조건부 렌더링
            <>닉네임을 입력 할 때까지 기다리는 중...</>
          ) : (
            <>
              <button onClick={() => navigate('/guest')}>게스트 모드</button>
              <button onClick={() => navigate('/main-select')}>00님 안녕하세요!</button>
            </>
          )
        ) : (
          <>
            <button onClick={() => navigate('/guest')}>게스트 모드</button>

            {/* 추후 로그인 경로가 다양해지면 로그인 하기 버튼 전체를 컴포넌트로 분리 <LogIn />*/}
            <button name="google" onClick={onSocialClick}>
              로그인 하기(Google)
            </button>
          </>
        )
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default ChooseModeAndLogin;
