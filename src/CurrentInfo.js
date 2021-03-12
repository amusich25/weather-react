import React from "react";
import FormattedDate from "./FormattedDate";
import CurrentTemp from "./CurrentTemp";
import InfoBreakdown from "./InfoBreakdown";

export default function CurrentInfo(props) {
  return (
    <div className="currentInfo">
      <div>
        <div>
          <h1 id="city">{props.data.city}</h1>
          <ul class="current-date">
            <li>
                <FormattedDate />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>  
      </div>
      <div className="row">
        <div className="col-6">
          <CurrentTemp />
        </div>
        <div className="col-6">
          <InfoBreakdown />
        </div>
      </div>
    </div>
  );
}
