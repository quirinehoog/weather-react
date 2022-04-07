import React from "react";
import Header from "./Header";
import Weather from "./Weather";
import Forecast from "./Forecast";


import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
