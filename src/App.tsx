import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LoginProvider } from './Context/Firebase/LoginContext';
import { ModalProvider } from './Context/Modal/ModalContext';
import { UserObjProvider } from './Context/UserObj/UserObjContext';

function App() {
  return (
    <UserObjProvider>
      <LoginProvider>
        <ModalProvider>
          <Outlet />
        </ModalProvider>
      </LoginProvider>
    </UserObjProvider>
  );
}

export default App;
