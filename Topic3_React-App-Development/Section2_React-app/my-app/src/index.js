import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Car } from './components/testing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <Car /> */}
  </React.StrictMode>
);


