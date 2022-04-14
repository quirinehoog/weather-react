import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      </div>
      <div className="Downpart">
        <p>
          This project is made by Quirine van 't Hoog and is open sourced on
          <a
            href="https://github.com/quirinehoog/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </div>
  );
}
