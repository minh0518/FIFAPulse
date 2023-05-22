import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import { LoginProvider } from './Context/Firebase/LoginContext';
import { ModalProvider } from './Context/Modal/ModalContext';
import { UserObjProvider } from './Context/UserObj/UserObjContext';

const OutLetContainerDiv = styled.div`
  height: 100vh;
`;

function App() {
  // const location = useLocation();
  return (
    <UserObjProvider>
      <LoginProvider>
        <ModalProvider>
          <OutLetContainerDiv>
            {/* {location.pathname.startsWith('/main-select') && <Navbar />} */}
            <Outlet />
          </OutLetContainerDiv>
        </ModalProvider>
      </LoginProvider>
    </UserObjProvider>
  );
}

export default App;
