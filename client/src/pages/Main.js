import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Dropdown from "react-bootstrap/Dropdown";
import exampleDog from "../assets/images/home-puppy.jpg";
import exampleCat from "../assets/images/home-cat.jpg";

import "../assets/css/Main.css";
export default function Main() {
  const mainContent = [
    {
      cardImg: exampleDog,
      cardTitle: "SPOTS",
      cardSex: "F",
      cardAge: 1,
    },
    {
      cardImg: exampleCat,
      cardTitle: "SPOTS2",
      cardSex: "M",
      cardAge: 2,
    },
  ];
  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="main-content text-center">
        <div>ADOPT</div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Dog</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Cat</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Bird</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {mainContent.map((content, index) => (
          <div className="card-container" key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={content.cardImg} />
              <Card.Body>
                <Card.Title>{content.cardTitle}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Sex: {content.cardSex} </ListGroupItem>
                <ListGroupItem>Age: {content.cardAge} </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="/details">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
