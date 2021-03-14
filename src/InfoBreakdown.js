import React from "react";

export default function InfoBreakdown (props) {
    return (
       <div id ="info-breakdown">
                <p>
                Humidity: <span id = "humidity">{props.data.humidity}</span>%<br />
                Wind Speed: <span id = "wind"></span> {Math.round(props.data.wind)} mph <br />
                </p>
              </div>
    )
}