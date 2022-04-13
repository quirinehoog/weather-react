import React from "react";
import "./Dayforecast.css";

export default function Dayforecast(props) {
  let dayData = {
    tempHigh: "11",
    tempLow: "8",
    day: "THU",
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png",
  };

  return (
    <div className="Dayforecast">
      <img src={dayData.imgUrl} alt="weather" width="50" />
      <div className="weather-forecast-temps">
        <span className="weather-forecast-temps-high">
          {dayData.tempHigh}°C{" "}
        </span>
        <span className="weather-forecast-temps-low">{dayData.tempLow}°C</span>
      </div>
      <div className="weather-forecast-day">{dayData.day}</div>
    </div>
  );
}
