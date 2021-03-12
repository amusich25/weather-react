import React from "react";
import "./header.css";
import CurrentInfo from "./CurrentInfo";
import axios from "axios";

export default function Weather() {
  
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt *1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind:response.data.wind.speed,
        city: response.data.name,
    });
    
}

function handleSubmit(event) {
    event.preventDefault();
    search();
}

function handleCityChange(event) {
    setCity(event.target.value);
}

function search () {
    const apiKey = "8fb476c298015405b2d8169c9a04e3da";
  let units = "imperial";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndPoint}?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(handleResponse);
}

  if (weatherData.ready) {
   return (

    <div className="search">
      <form id="search-form">
        <div className="search-bar">
          <input
            type="search"
            id="city-input"
            name="name"
            className="type"
            placeholder="Enter New Location"
            size="30"
          ></input>
          <button type="button" className="changeloc" id="changloc">
            Search
          </button>
          <button type="button" className="locbutton" id="locbutton">
            Current Location
          </button>
        </div>
        </form>
        <CurrentInfo />
    </div>
  );
}
else {
    search ();
    return "Loading..."
}
}
  
  

