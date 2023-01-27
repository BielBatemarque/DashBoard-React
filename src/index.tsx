import React from 'react';
import ReactDOM from 'react-dom/client';
import DashBoard from './pages/Dashboard/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DashBoard />
  </React.StrictMode>
);

