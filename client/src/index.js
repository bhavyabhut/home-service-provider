import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import PublicRoutes from './mainRouter';
import { Provider } from './Context/GlobalContext';
import config from './config';

import './index.css';
import 'antd/dist/antd.min.css';

ReactGA.initialize(config.GA_KEY);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <PublicRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
