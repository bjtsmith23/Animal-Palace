import React from "react";
import Card from "react-bootstrap/Card";

import exampleDog from "../assets/images/home-puppy.jpg";
import exampleCat from "../assets/images/home-cat.jpg";

export default function ContributionCard() {
  const contributionContent = [
    {
      cardImg: exampleDog,
      cardTitle: "SPOTS",
    },
    {
      cardImg: exampleCat,
      cardTitle: "SPOTS2",
    },
  ];
  return (
    <>
      {contributionContent.map((content, index) => (
        <div className="card-container m-4 border-0 shadow" key={index}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={content.cardImg} />
            <Card.Body>
              <Card.Title>{content.cardTitle}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}
