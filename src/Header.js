import React from "react";
import Search from "./Search";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div class="row">
        <div class="col-6">
          <h1 id="city">Santa Cruz</h1>
          <ul class="current-date">
            <li id="day">Sunday</li>
            <li id="date">January 1, 2021</li>
            <li>
              Last Updated: <span id="time">12:01am</span>
            </li>
          </ul>
        </div>
        <div class="col-6">
          <Search />
        </div>
      </div>
    </div>
  );
}
