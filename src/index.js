import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import Downpart from './Downpart';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="container">
      <div className="Downpart">
      <Downpart />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
