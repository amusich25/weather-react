import React from "react";

export default function InfoBreakdown () {
    return (
       <div id ="info-breakdown">
                <p>
                Pressure: <span id = "pressure"></span> <br />
                Humidity: <span id = "humidity"></span>%<br />
                Wind Speed: <span id = "wind"></span> mph <br />
                </p>
              </div>
    )
}