import React from "react";
import "../assets/css/Details.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function Details(props) {
  const { modalinfo } = props;
  return (
    <Card className="border-0">
      <Row>
        <Col>
          <Card.Img
            src={modalinfo ? modalinfo.image : ""}
            className="detail-img"
          />
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Text>{modalinfo ? modalinfo.description : ""}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Sex: {modalinfo ? modalinfo.sex : ""}
              </ListGroupItem>
              <ListGroupItem>
                Age: {modalinfo ? modalinfo.age : ""}
              </ListGroupItem>
              {/* <ListGroupItem>Vestibulum at eros</ListGroupItem> MAYBE INCLUDE FAVORITE FOODS??? */}
            </ListGroup>
          </Card>
          <Card.Body className="text-center">
            <Button variant="outline-success" href="#">
              ❤ Adopt Me! ❤
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
