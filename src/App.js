import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Weather defaultCity="New York"/>
      </div>
      <Footer />
    </div>
  );
}
