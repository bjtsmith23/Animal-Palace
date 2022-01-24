import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

export default function MainCard({ animal, handleModalShow }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={animal.image} />
        <Card.Body>
          <Card.Title>{animal.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Sex: {animal.sex} </ListGroupItem>
          <ListGroupItem>Age: {animal.age} </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button
            variant="primary"
            data-modal-id={animal._id}
            onClick={handleModalShow}
          >
            Learn More!
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
