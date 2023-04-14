import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LoginProvider } from './Context/Firebase/LoginContext';
import { ModalProvider } from './Context/ModalContext/ModalContext';

function App() {
  return (
    <>
      <ModalProvider>
        <LoginProvider>
          <Outlet />
        </LoginProvider>
      </ModalProvider>
    </>
  );
}

export default App;
