import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChooseMode from './Pages/ChooseMode';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import Guest from './Pages/Guest/Guest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      { index: true, element: <ChooseMode /> },
      { path: '/login', element: <Login /> },
      { path: '/main', element: <Main /> },
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
