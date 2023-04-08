import React, { useEffect, useState } from 'react';
import FIFAData from './services/FifaData';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>This is App</h1>
      <Outlet />
    </>
  );
}

export default App;
