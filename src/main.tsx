import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Challenge from './Pages/Challenge';
import ChooseModeAndLogin from './Pages/ChooseModeAndLogin';
import Guest from './Pages/Guest/Guest';
import MainSelect from './Pages/MainSelect';
import MatchStatistics from './Pages/MatchStatistics';
import MyRecord from './Pages/MyRecord';
import PositionGuide from './Pages/PositionGuide';
import UserRecord from './Pages/UserRecord';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      { index: true, element: <ChooseModeAndLogin /> },
      { path: '/main-select', element: <MainSelect /> },
      { path: '/main-select/my-record', element: <MyRecord /> },
      { path: '/main-select/my-record/:matchId', element: <MatchStatistics /> },
      { path: '/main-select/position-guide', element: <PositionGuide /> },
      { path: '/main-select/user-record', element: <UserRecord /> },
      { path: '/main-select/challenge', element: <Challenge /> },
      { path: '/*', element: <App /> },
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
