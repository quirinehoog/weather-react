import React from "react";
import Header from "./Header";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./App.css";
import Downpart from "./downpart";

function App() {
  return (
    <div className="App">
      <h1>Weather React</h1>
      <Header />
      <Weather />
      <Forecast />
      <Downpart />
    </div>
  );
}

export default App;
