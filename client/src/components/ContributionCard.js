import React from "react";
import Card from "react-bootstrap/Card";

export default function ContributionCard({ animalAdopted }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`/images/${animalAdopted.image}`} />
        <Card.Body>
          <Card.Title>{animalAdopted.name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
