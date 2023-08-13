import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import ChooseModeAndLogin from './Pages/ChooseModeAndLogin';
import MainSelect from './Pages/MainSelect';
import MatchStatistics from './Pages/MatchStatistics';
import MyRecord from './Pages/MyRecord';
import PositionGuide from './Pages/PositionGuide';
import RecordWithOtherUser from './Pages/RecordWithOtherUser';

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
      { path: '/main-select/user-record', element: <RecordWithOtherUser /> },
      { path: '/*', element: <App /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
