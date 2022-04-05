import React from "react";
import Dayforecast from "./Dayforecast";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <Dayforecast />
        </div>
        <div className="col-2">
          <Dayforecast />
        </div>
        <div className="col-2">
          <Dayforecast />
        </div>
        <div className="col-2">
          <Dayforecast />
        </div>
        <div className="col-2">
          <Dayforecast />
        </div>
      </div>
    </div>
  );
}
