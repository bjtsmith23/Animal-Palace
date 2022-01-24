import React from "react";
import "../assets/css/Details.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
// import BeAMemberButton from "./BeAMemberButton";

export default function Details(props) {
  const { animalinfo } = props;
  return (
    <Card className="border-0">
      <Row>
        <Col>
          <Card.Img
            src={animalinfo ? animalinfo.image : ""}
            className="detail-img"
          />
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Text>{animalinfo ? animalinfo.description : ""}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Sex: {animalinfo ? animalinfo.sex : ""}
              </ListGroupItem>
              <ListGroupItem>
                Age: {animalinfo ? animalinfo.age : ""}
              </ListGroupItem>
              <ListGroupItem>
                Favorite Food: {animalinfo ? animalinfo.favoriteFood : ""}
              </ListGroupItem>
            </ListGroup>
          </Card>
          <Card.Body className="text-center">
            <Button variant="outline-success">❤ Adopt Me! ❤</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
