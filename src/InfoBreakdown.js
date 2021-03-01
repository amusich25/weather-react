import React from "react";

export default function InfoBreakdown() {
  return (
    <div id="info-breakdown">
      <p>
        Pressure: <span id="pressure">1017</span> <br />
        Humidity: <span id="humidity">80%</span>%<br />
        Wind Speed: <span id="wind">5</span> mph <br />
      </p>
    </div>
  );
}
