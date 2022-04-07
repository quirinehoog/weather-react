import React from "react";
import Dayforecast from "./Dayforecast";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <Dayforecast />
        </div>
        <div className="col">
          <Dayforecast />
        </div>
        <div className="col">
          <Dayforecast />
        </div>
        <div className="col">
          <Dayforecast />
        </div>
        <div className="col">
          <Dayforecast />
        </div>
      </div>
    </div>
  );
}
