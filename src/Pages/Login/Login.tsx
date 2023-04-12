import { authService } from '../../../firebase';
import React, { useState } from 'react';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onSocialClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;

    let provider;

    //구글 provider생성
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    }

    const data = await signInWithPopup(authService, provider as GoogleAuthProvider);
    console.log(data);

    // 피파온라인 닉네임 등록하는 로직 추가

    navigate('/');
  };
  return (
    <div>
      <button onClick={onSocialClick} name="google">
        구글 로그인
      </button>
    </div>
  );
};

export default Login;
