import React from "react";
import Header from "./Header";
import Forecast from "./Forecast";
import Downpart from "./Downpart";


import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header defaultCity="New York"/>
        <Forecast />
      </div>
    
      <Downpart />
      </div>
  
  );
}
