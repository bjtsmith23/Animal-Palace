import React, { useState } from "react";
import MainCardModal from "../components/MainCardModal";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

import { useQuery } from "@apollo/client";
import { QUERY_ALL_ANIMALS } from "../utils/queries";

export default function MainCard() {
  const { loading, data } = useQuery(QUERY_ALL_ANIMALS);
  const animals = data?.animals || [];

  console.log(animals);

  const [selectedModal, setSelectedModal] = useState();
  const [modalShow, setModalShow] = useState(false);
  const handleOnclick = (e) => {
    setModalShow(!modalShow);
    const id = e.target.getAttribute("data-modal-id");
    const matchingContent = animals.filter((animal) => animal._id === id)[0];
    setSelectedModal(matchingContent);
  };
  return (
    <>
      {loading ? <div>Loading...</div> : null}

      {animals
        ? animals.map((animal, index) => (
            <div className="card-container m-5 border-0 shadow" key={index}>
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
                    onClick={handleOnclick}
                  >
                    Learn More!
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        : null}

      <MainCardModal
        show={modalShow}
        modalinfo={selectedModal}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
