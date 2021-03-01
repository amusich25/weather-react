import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="search">
      <form id="search-form">
        <div className="search-bar">
          <input
            type="search"
            id="city-input"
            name="name"
            className="type"
            placeholder="Enter New Location"
            size="30"
          ></input>
          <button type="button" className="changeloc" id="changloc">
            Search
          </button>
          <button type="button" className="locbutton" id="locbutton">
            Current Location
          </button>
        </div>
      </form>
    </div>
  );
}
