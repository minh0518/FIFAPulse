import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LoginProvider } from './Context/Firebase/LoginContext';
import { ModalProvider } from './Context/Modal/ModalContext';
import { UserObjProvider } from './Context/UserObj/UserObjContext';

function App() {
  return (
    <>
      <UserObjProvider>
        <ModalProvider>
          <LoginProvider>
            <Outlet />
          </LoginProvider>
        </ModalProvider>
      </UserObjProvider>
    </>
  );
}

export default App;
