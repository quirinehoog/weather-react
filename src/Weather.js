import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const [weatherData,setWeatherData] = useState({ ready:false});
const [city, setCity]= useState(props.defaultCity);

  function handleResponse(response){
  setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    wind: response.data.wind.speed,
    city: response.data.name,
  });
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);}

  function search() {
  const apiKey = "773ced64ee475210867d00eb3da7adbe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);}

if (weatherData.ready){
     return (
       <div className="Header">
         <form onSubmit={handleSubmit}>
           <div className="row">
             <div className="col-6">
               <div className="Cityname">
                 <input
                   className="form-control"
                   type="search"
                   placeholder="Enter a city..."
                   autoComplete="off"
                   autoFocus="on"
                   onChange={handleCityChange}
                 />
               </div>
             </div>
             <div className="col-3">
               <div className="Search">
                 <input
                   type="submit"
                   value="Search"
                   className="form-control btn btn-primary shadow-sm w-100"
                 />
               </div>
             </div>
             <div className="col-3">
               <div className="Live">
                 <input
                   type="submit"
                   value="LIVE location"
                   className="form-control btn btn-primary shadow-sm w-100"
                 />
               </div>
             </div>
           </div>
         </form>
         <WeatherInfo data={weatherData} />
         <Forecast coordinates={weatherData.coordinates} />
         
       </div>
     );
} else {
  search();
  return "Loading...";
}}