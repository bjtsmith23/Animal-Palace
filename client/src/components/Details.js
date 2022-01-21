import React from "react";

// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";

import HomePuppy from "../assets/images/home-puppy.jpg";

export default function Details() {
  return (
    <div>
      <Row>
        <Col>
          <Card.Img variant="top" src={HomePuppy} />
        </Col>
        <Col>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <ListGroup className="list-group-flush">
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Add to Cart</Card.Link>
          </Card.Body>
        </Col>
      </Row>
    </div>
  );
}
