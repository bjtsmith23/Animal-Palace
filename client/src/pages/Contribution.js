import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../assets/css/Contribution.css";

export default function Main() {
  return (
    <div className="contribution-container">
      <div className="header">
        <Header />
      </div>
      <div className="contribution-content text-center">
        <h1>EXAMPLE NAME's contribution</h1>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
