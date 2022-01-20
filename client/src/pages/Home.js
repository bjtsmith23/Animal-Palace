import React from "react";
import "../assets/css/Home.css";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover the World of Animals</h1>
        <h2 className="hero-subtitle">
          From dogs and cats to monkeys and elephants. We have them all! By
          adopting or donating, YOU can make their world a better place!
        </h2>
        <Button variant="outline-light" href="/main">
          Explore More &raquo;
        </Button>{" "}
        <Button variant="outline-danger">Signup Here! &raquo;</Button>{" "}
      </div>
    </div>
  );
};

export default Home;
