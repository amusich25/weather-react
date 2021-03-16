import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview (props) {

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
};
    
    function hours() {
        console.log(props.data);
        let date = new Date(props.data.dt * 1000);
        let time = formatHours(date);
        return `${time}`;
    }

    function temperature () {
        let temperature = Math.round(props.data.main.temp)
        return `${temperature} °F`;
    }

    return (
        <div className="WeatherForecastPreview col">
            {hours()}
            <WeatherIcon code={props.data.weather[0].icon}/>
            {temperature()}
        </div>
    )
}