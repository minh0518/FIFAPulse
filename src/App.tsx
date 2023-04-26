import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { LoginProvider } from './Context/Firebase/LoginContext';
import { ModalProvider } from './Context/Modal/ModalContext';
import { UserObjProvider } from './Context/UserObj/UserObjContext';

function App() {
  const location = useLocation();
  return (
    <UserObjProvider>
      <LoginProvider>
        <ModalProvider>
          {location.pathname.startsWith('/main-select') && <Navbar />}
          <Outlet />
        </ModalProvider>
      </LoginProvider>
    </UserObjProvider>
  );
}

export default App;
