import React from "react";
import Header from "./Header";
import CurrentInfo from "./CurrentInfo";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Header />
        <CurrentInfo />
      </div>
      <Footer />
    </div>
  );
}
