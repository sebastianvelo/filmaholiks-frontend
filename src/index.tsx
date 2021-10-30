import React from 'react';
import ReactDOM from 'react-dom';
import './client/style/index.css';
import App from './client/App';
import { HashRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import appBlueprint from 'blueprint/AppBlueprint';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App {...appBlueprint} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
