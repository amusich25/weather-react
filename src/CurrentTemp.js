import React, { useStates } from "react";
import "./currenttemp.css";

export default function CurrentTemp() {
  return (
    <div className="clearfix current-temperature">
      <img
        src={weatherData.iconUrl}
        alt={weatherData.description}
        className="float-left"
        id="current-weather-icon"
      ></img>
      <div className="float-left"> 
      <span className="currenttemp">{props.data.temperature}</span>
      <span className="units">
        <a href="/" id="fahrenheit-link" className="active">
          °F
        </a>{" "}
        |
        <a href="/" id="celsius-link">
          °C
        </a>
      </span>
      </div>
    </div>
  );
}
