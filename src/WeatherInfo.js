import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-md-8">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-md-4 daytime">
          <FormattedDate date={props.data.date} />
        </div>
      </div>
      <div className="clearweather">
        <div className="row">
          <div className="col-md-4 weathericon">
            <WeatherIcon code={props.data.icon} alt="Clear" size="70" />
          </div>
          <div className="col-md-4">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>

          <div className="col-md-4">
            <div className="weatherinfo-rightside">
              <ul>
                <li>Humidity: {props.data.humidity} %</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
