import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChooseMode from './Pages/ChooseMode';
import Login from './Pages/Login/Login';
import MainSelect from './Pages/MainSelect';
import Guest from './Pages/Guest/Guest';
import MyRecord from './Pages/MyRecord';
import PositionGuide from './Pages/PositionGuide';
import UserRecord from './Pages/UserRecord';
import Challenge from './Pages/Challenge';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      //상대 경로로 바꿔보자
      { index: true, element: <ChooseMode /> },
      { path: '/login', element: <Login /> },
      { path: '/main-select', element: <MainSelect /> },
      { path: '/main-select/my-record', element: <MyRecord /> },
      { path: '/main-select/position-guide', element: <PositionGuide /> },
      { path: '/main-select/user-record', element: <UserRecord /> },
      { path: '/main-select/challenge', element: <Challenge /> },
    ],
  },
  {
    path: '/guest',
    element: <Guest />,
    errorElement: '',
    children: [
      { index: true, element: '' },
      { path: '', element: '' },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
