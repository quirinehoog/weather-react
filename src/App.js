import React from "react";
import Header from "./Header";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Downpart from "./Downpart";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather React</h1>
        <Header />
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
