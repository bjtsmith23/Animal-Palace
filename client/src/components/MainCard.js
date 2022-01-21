import React, { useState } from "react";
import MainCardModal from "../components/MainCardModal";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

import exampleDog from "../assets/images/home-puppy.jpg";
import exampleCat from "../assets/images/home-cat.jpg";

export default function MainCard() {
  const mainContent = [
    {
      _id: "ljlkasjera",
      cardImg: exampleDog,
      cardTitle: "SPOTS",
      cardSex: "F",
      cardAge: 1,
      cardDescription: "abcdefg",
    },
    {
      _id: "laskjfalskjera",
      cardImg: exampleCat,
      cardTitle: "SPOTS2",
      cardSex: "M",
      cardAge: 2,
      cardDescription: "hijklmnop",
    },
  ];
  const [selectedModal, setSelectedModal] = useState();
  const [modalShow, setModalShow] = useState(false);
  const handleOnclick = (e) => {
    setModalShow(!modalShow);
    const id = e.target.getAttribute("data-modal-id");
    const matchingContent = mainContent.filter((mc) => mc._id === id)[0];
    setSelectedModal(matchingContent);
  };
  return (
    <>
      {mainContent.map((content, index) => (
        <div className="card-container m-5 border-0 shadow" key={index}>
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
              <Button
                variant="primary"
                data-modal-id={content._id}
                onClick={handleOnclick}
              >
                Learn More!
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
      <MainCardModal
        show={modalShow}
        modalinfo={selectedModal}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
