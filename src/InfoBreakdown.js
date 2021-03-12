import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export default function InfoBreakdown () {
    return (
       <div id ="info-breakdown">
                <p>
                Humidity: <span id = "humidity">{prop.data.humity}</span>%<br />
                Wind Speed: <span id = "wind"></span> {props.data.wind} mph <br />
                </p>
              </div>
    )
}