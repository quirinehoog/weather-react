import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Dayforecast.css";

export default function Dayforecast(props) {
  function tempHigh() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function tempLow() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[day];
  }

  return (
    <div className="Dayforecast">
      <WeatherIcon code={props.data.weather[0].icon} alt="weather" width="50" size="40"/>
      <div className="weather-forecast-temps">
        <span className="weather-forecast-temps-high">{tempHigh()} </span>
        <span className="weather-forecast-temps-low">{tempLow()}</span>
      </div>
      <div className="weather-forecast-day">{day()}</div>
    </div>
  );
}
