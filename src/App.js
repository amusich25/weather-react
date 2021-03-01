import React from "react";
import axios from "axios";
import Header from "./Header";
import CurrentInfo from "./CurrentInfo";
import Footer from "./Footer";
import "./styles.css";

function App() {
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

export default App;
