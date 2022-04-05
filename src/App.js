import React from "react";
import Header from "./Header";
import Weather from "./Weather";

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
      
      </header>
    </div>
  );
}

export default App;
