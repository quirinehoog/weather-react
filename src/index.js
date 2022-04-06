import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import Downpart from './downpart';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="container">
      <Downpart />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
