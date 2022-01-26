import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_USER_ANIMAL } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";

export default function ContributionCard({ animalAdopted }) {
  const [deleteUserAnimal, { error }] = useMutation(DELETE_USER_ANIMAL);

  const { data } = useQuery(QUERY_USER);
  let user = data?.user || [];

  if (data) {
    user = data.user;
  }

  const handleDeleteSubmit = async (event) => {
    event.preventDefault();
    alert(`Thank you for taking care of ${animalAdopted.name} all this time!`);

    try {
      const { data } = await deleteUserAnimal({
        variables: {
          animalId: animalAdopted._id,
        },
      });
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`/images/${animalAdopted.image}`} />
        <Card.Body>
          <Card.Title>{animalAdopted.name}</Card.Title>
          <Button variant="danger" onClick={handleDeleteSubmit}>
            Remove
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
