import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export default function InfoBreakdown (props) {
    return (
       <div id ="info-breakdown">
                <p>
                Humidity: <span id = "humidity">{props.data.humidity}</span>%<br />
                Wind Speed: <span id = "wind"></span> {props.data.wind} mph <br />
                </p>
              </div>
    )
}