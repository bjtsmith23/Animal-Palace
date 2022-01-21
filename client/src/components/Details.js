import React from "react";
import "../assets/css/Details.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";

export default function Details(props) {
  const { modalinfo } = props;
  return (
    <Card className="border-0">
      <Row>
        <Col>
          <Card.Img
            src={modalinfo ? modalinfo.cardImg : ""}
            className="detail-img"
          />
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Sex: {modalinfo ? modalinfo.cardSex : ""}
              </ListGroupItem>
              <ListGroupItem>
                Age: {modalinfo ? modalinfo.cardAge : ""}
              </ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Card>
          <Card.Body className="text-center">
            <Card.Link href="#">Add to Cart</Card.Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
