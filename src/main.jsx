import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CurrencyApi from './context/CurrencyApi.jsx'; // Import the correct component
import App from './App.jsx';
import './index.css';

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrencyApi>
        <App />
      </CurrencyApi>
    </BrowserRouter>
  </React.StrictMode>
);
