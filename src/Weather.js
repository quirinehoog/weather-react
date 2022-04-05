import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <div className="weather-leftside">
            <h1>Paris</h1>
            <h6 className="now">Thursday 12:00</h6>
            <span className="temperature" id="temperature">
              5 °C
            </span>
          </div>
        </div>
        <div className="col-6">
          <div className="weather-rightside">
            <div className="weatherimage-rightside">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="Clear"
                width="110"
              />
            </div>
            <div className="weatherinfo-rightside">
              <ul>
                <li>Humidity: 45 %</li>
                <li>Wind: 2 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
