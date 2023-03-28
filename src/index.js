import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header/Header';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
);
