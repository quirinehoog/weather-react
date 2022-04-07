import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <div className="weather-leftside">
            <ul>
              <li>
                <h1>Paris</h1>
              </li>
              <li>
                <h6 className="now">Thursday 12:00</h6>
              </li>
              <li>
                <div className="weatherimage-rightside">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt="Clear"
                    width="110"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="weatherinfo-rightside">
            <ul>
              <li className="temperature">Temperature: 5 °C</li>
              <li>Humidity: 45 %</li>
              <li>Wind: 2 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
