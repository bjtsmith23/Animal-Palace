import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import exampleDog from "../assets/images/home-puppy.jpg";
import exampleCat from "../assets/images/home-cat.jpg";

export default function MainCard() {
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
    <>
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
    </>
  );
}
