import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemp from "./CurrentTemp";
import InfoBreakdown from "./InfoBreakdown";

export default function CurrentInfo(props) {
  return (
    <div className="currentInfo">
      <div>
        <div>
          <h1>{props.data.city}</h1>
          <ul class="current-date">
            <li>
                <FormattedDate date={props.data.date}/>
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>  
      </div>
      <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix current-temperature">
                <div className="float-left">
                <WeatherIcon code ={props.data.icon} />
                </div>
                <div className="float-left">
                <CurrentTemp fahrenheit={props.data.temperature} />
                </div>
            </div>
        </div>
        <div className="col-6">
            <InfoBreakdown data={props.data}/>
        </div>
      </div>
    </div>
  );
}
