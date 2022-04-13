import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return(
<div className="WeatherInfo">
  <div className="row">
    <div className="col-6">
      <div className="weather-leftside">
        <ul>
          <li>
            <h1>{props.data.city}</h1>
          </li>
          <li>
            <h6 className="now">{props.data.date}</h6>
          </li>
          <li>
            <div className="weatherimage-rightside">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="Clear"
                width="110"
              />
              <span className="temperature">{props.data.temperature}</span>
              <span className="unit">°C</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-6">
      <div className="weatherinfo-rightside">
        <ul>
          <li>Precipitation: 15%</li>
          <li>Humidity: {props.data.humidity} %</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    );
}
