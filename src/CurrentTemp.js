import React, { useState } from "react";
import "./currenttemp.css";

export default function CurrentTemp(props) {
    const [unit, setUnit] = useState("fahrenheit");
    function showCelsius(event) {
        event.preventDefualt ();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefualt();
        setUnit("fahrenheit");
    }

    function celsius() {
        return (props.fahrenheit - 32) * 5/9;
    }

    if (unit==="fahrenhiet") {
       return (
      <div className="float-left"> 
      <span className="currenttemp">{Math.round(props.fahrenheit)}</span>
      <span className="units">
        <a href="/" id="fahrenheit-link" className="active">
          °F
        </a>{" "}
        |
        <a href="/" id="celsius-link" onClick={showCelsius}>
          °C
        </a>
      </span>
      </div>
  ); 
    } else {
        return (
            <div className="float-left"> 
      <span className="currenttemp">{Math.round(celsius())}</span>
      <span className="units">
        <a href="/" id="fahrenheit-link" className="active" onClick={showFahrenheit}>
          °F
        </a>{" "}
        |
        <a href="/" id="celsius-link">
          °C
        </a>
      </span>
      </div>
        );
    }
}