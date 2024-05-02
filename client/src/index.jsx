import React from 'react';
import ReactGA from 'react-ga4';
import { createRoot } from 'react-dom/client';

import PublicRoutes from './routes';
import { Provider } from './Context/GlobalContext';
import config from './config';

import './index.css';

ReactGA.initialize(config.GA_KEY);
ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
  title: window.location.pathname,
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider>
      <PublicRoutes />
    </Provider>
  </React.StrictMode>,
);
