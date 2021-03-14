import React, { useState } from "react";
import "./currenttemp.css";

export default function CurrentTemp(props) {
    const [unit, setUnit] = useState("fahrenheit");
    function showCelsius(event) {
        event.preventDefault ();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function celsius() {
        return (props.fahrenheit - 32) * 5/9;
    }

    if (unit==="fahrenheit") {
       return (
      <div className="float-left"> 
      <span className="currenttemp">{Math.round(props.fahrenheit)}</span>
      <span className="units">
          °F
        |{" "}
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
                    <a href="/" id="fahrenheit-link" onClick={showFahrenheit}>
                        °F
                    </a>{" "}
                    | °C
                </span>
            </div>
        );
    }
}