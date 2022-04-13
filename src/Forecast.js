import React, { useEffect } from "react";
import Dayforecast from "./Dayforecast";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
  setLoaded(false);
}, [props.coordinates]);

function handleResponse(response) {
  setForecast(response.data.daily);
  setLoaded(true);
}

 function load() {
   const apiKey = "773ced64ee475210867d00eb3da7adbe";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
   axios.get(apiUrl).then(handleResponse);
 }

 if (loaded) {
  return (
    <div className="Forecast">
      <div className="row">
         {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <Dayforecast data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}