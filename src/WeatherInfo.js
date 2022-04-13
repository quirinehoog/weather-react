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
            <FormattedDate date={props.data.date}/>
          </li>
          <li>
            <div className="weatherimage-rightside">
              <WeatherIcon code={props.data.icon}
                alt="Clear"
                width="110"
              />
              <WeatherTemperature celsius={props.data.temperature} />
              <span className="unit">°C</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-6">
      <div className="weatherinfo-rightside">
        <ul>
          <li>Precipitation: {props.data.precipitation}%</li>
          <li>Humidity: {props.data.humidity} %</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    );
}
