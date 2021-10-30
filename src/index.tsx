import React from 'react';
import ReactDOM from 'react-dom';
import './client/style/index.css';
import { HashRouter } from "react-router-dom";
import appBlueprint from 'blueprint/AppBlueprint';
import App from './client/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App {...appBlueprint} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
