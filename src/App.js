import React from "react";
import Weather from "./Weather";
import Downpart from "./Downpart";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      </div>

      <Downpart />
    </div>
  );
}
