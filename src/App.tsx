import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ModalProvider } from './Context/Modal/ModalContext';
import { IsNicknameChangedProvider } from './Context/Nickname/NicknameChangedContext';
import { UserObjProvider } from './Context/UserObj/UserObjContext';
import championsLeagueBackgroundImg from './images/championsLeagueBackgroundImg.webp';
import { pathNameProps } from './types/props';

const OutLetContainerDiv = styled.div<pathNameProps>`
  background: ${(props) =>
    props.pathName !== '/main-select' && props.pathName !== '/'
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

  background-color: #e9ebee;
  min-height: 100vh;
`;

function App() {
  const location = useLocation();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserObjProvider>
        <IsNicknameChangedProvider>
          <ModalProvider>
            <OutLetContainerDiv pathName={location.pathname}>
              {/* {location.pathname.startsWith('/main-select') && <Navbar />} */}
              <Outlet />
            </OutLetContainerDiv>
          </ModalProvider>
        </IsNicknameChangedProvider>
      </UserObjProvider>
    </QueryClientProvider>
  );
}

export default App;
