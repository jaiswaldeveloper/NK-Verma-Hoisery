import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-oeq4iwmq.us.auth0.com"
    clientId="YzY0bnsJjI9bG3tjqI0sW7WLZf2nvLX4"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
