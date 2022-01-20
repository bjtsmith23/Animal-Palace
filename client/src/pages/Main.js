import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import MainCard from "../components/MainCard";
import "../assets/css/Main.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="main-content text-center">
        <div>ADOPT</div>
        <Dropdown />
        <MainCard />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
