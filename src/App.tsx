import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import { LoginProvider } from './Context/Firebase/LoginContext';
import { ModalProvider } from './Context/Modal/ModalContext';
import { UserObjProvider } from './Context/UserObj/UserObjContext';
import championsLeagueBackgroundImg from './images/championsLeagueBackgroundImg.webp';
import { pathNameProps } from './types/props';

const OutLetContainerDiv = styled.div<pathNameProps>`
  background: ${(props) =>
    props.pathName !== '/main-select'
      ? `linear-gradient(
      to right,
      rgba(233, 235, 238, 0) 0%,
      rgba(233, 235, 238, 0.6) 25%,
      rgba(233, 235, 238, 1) 40%,
      rgba(233, 235, 238, 1) 50%,
      rgba(233, 235, 238, 0.5) 75%,
      rgba(233, 235, 238, 1) 100%
    ),
    linear-gradient(
      to left,
      rgba(233, 235, 238, 0) 0%,
      rgba(233, 235, 238, 0.6) 25%,
      rgba(233, 235, 238, 1) 40%,
      rgba(233, 235, 238, 1) 50%,
      rgba(233, 235, 238, 0.5) 75%,
      rgba(233, 235, 238, 1) 100%
    ),
    url(${championsLeagueBackgroundImg})`
      : ''};

  background-size: ${(props) => (props.pathName !== '/main-select' ? 'cover' : '')};
  background-attachment: ${(props) => (props.pathName !== '/main-select' ? 'fixed' : '')};
  background-repeat: no-repeat;

  background-color: #e9ebee;
  min-height: 100vh;
`;

function App() {
  const location = useLocation();
  return (
    <UserObjProvider>
      <LoginProvider>
        <ModalProvider>
          <OutLetContainerDiv pathName={location.pathname}>
            {/* {location.pathname.startsWith('/main-select') && <Navbar />} */}
            <Outlet />
          </OutLetContainerDiv>
        </ModalProvider>
      </LoginProvider>
    </UserObjProvider>
  );
}

export default App;
