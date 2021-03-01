import React from "react";
import CurrentTemp from "./CurrentTemp";
import InfoBreakdown from "./InfoBreakdown";

export default function CurrentInfo() {
  return (
    <div className="currentInfo">
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
