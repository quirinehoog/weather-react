import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <div className="weather-leftside">
            <ul>
              <li>
                <h1>{props.data.city}</h1>
              </li>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li>
                <WeatherIcon code={props.data.icon} alt="Clear" />
                <WeatherTemperature celsius={props.data.temperature} />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4">
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
