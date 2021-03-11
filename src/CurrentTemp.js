import React from "react";
import "./currenttemp.css";

export default function CurrentTemp() {
  return (
    <div className="clearfix current-temperature">
      <img
        src="http://openweathermap.org/img/wn/02n@2x.png"
        alt=""
        className="float-left"
        id="current-weather-icon"
      ></img>
      <div className="float-left"> 
      <span className="currenttemp">54</span>
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
