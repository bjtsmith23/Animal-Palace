import React from "react";
import "../assets/css/Details.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useMutation } from "@apollo/client";
import { ADD_USER_ANIMAL } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

export default function Details(props) {
  const { animalinfo } = props;
  const [addUserAnimal, { error }] = useMutation(ADD_USER_ANIMAL);

  const { data } = useQuery(QUERY_USER);
  let user = data?.user || [];

  if (data) {
    user = data.user;
  }
  // console.log(data.user.adoptedAnimals);

  const handleAdoptSubmit = async (event) => {
    //event.preventDefault();
    alert(`Thank you ${user.firstName} for adopting ${animalinfo.name}! 🎉`);

    try {
      const { data } = await addUserAnimal({
        variables: {
          animalId: animalinfo._id,
        },
      });
      window.location.reload(false);
      // console.log(data.addUserAnimal.adoptedAnimals[0]._id);
    } catch (err) {
      console.log(err);
    }
  };

  // let animalIdAlreadyInArr = data.addUserAnimal.adoptedAnimals[0]._id;
  // console.log(animalIdAlreadyInArr);
  // if (animalIdAlreadyInArr) {
  //   alert(`${animalinfo.name} has already been adopted!`);
  // }
  const renderAdoptButton = () => {
    const hasDonated = user && user.totalDonations;
    const hasAdopted =
      user &&
      user.adoptedAnimals &&
      user.adoptedAnimals.findIndex(
        (animal) => animal._id === animalinfo._id
      ) >= 0;
    const hasLoggedIn = Auth.loggedIn();

    if (hasLoggedIn) {
      if (!hasAdopted && hasDonated) {
        return (
          <Button onClick={handleAdoptSubmit} variant="outline-success">
            ❤ Adopt Me! ❤
          </Button>
        );
      } else if (hasDonated && hasAdopted) {
        return <p>You have already adopted {animalinfo.name}. 🎉</p>;
      } else {
        return <p>Please donate to adopt {animalinfo.name}.</p>;
      }
    } else {
      return (
        <>
          <p>You need to be logged in to adopt.</p>
          <p>
            Please <Link to="/login">login</Link> or{" "}
            <Link to="/signup">signup</Link> ❤
          </p>
        </>
      );
    }
  };
  return (
    <Card className="border-0">
      <Row>
        <Col>
          <Card.Img
            src={animalinfo ? `/images/${animalinfo.image}` : ""}
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
          <Card.Body className="text-center">{renderAdoptButton()}</Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
