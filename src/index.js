import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header/Header';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './store.js'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <GoogleOAuthProvider clientId='398701196846-1n8sr22rc55etti1cedf9qvnaovpfb4q.apps.googleusercontent.com'>
          <BrowserRouter>
            <Header />
            <App />
          </BrowserRouter>
          </GoogleOAuthProvider>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
);
