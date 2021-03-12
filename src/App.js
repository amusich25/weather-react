import React from "react";
import Weather from "./Weather";
import CurrentInfo from "./CurrentInfo";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Weather defaultCity="New York"/>
        <CurrentInfo />
      </div>
      <Footer />
    </div>
  );
}
