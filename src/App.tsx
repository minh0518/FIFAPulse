import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LoginProvider } from './Context/Firebase/LoginContext';

function App() {
  return (
    <>
      <LoginProvider>
        <Outlet />
      </LoginProvider>
    </>
  );
}

export default App;
