import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Test from './components/Test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      { index: true, element: <Test /> },
      { path: '', element: '' },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
