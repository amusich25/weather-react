import React from "react";
import "./currenttemp.css";

export default function CurrentTemp(props) {
  return (
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
  );
}
