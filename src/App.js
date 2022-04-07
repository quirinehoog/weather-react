import React from "react";
import Header from "./Header";
import Forecast from "./Forecast";


import "./App.css";

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header defaultCity="New York"/>
        <Forecast />
      </div>
    </div>
  );
}

export default App;
