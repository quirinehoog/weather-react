import React from "react";
import Header from "./Header";
import Weather from "./Weather";
import Forecast from "./Forecast";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
         Hallo World
        </h1>
        <Header />
        <Weather />
        <Forecast />
      
      </header>
    </div>
  );
}

export default App;
