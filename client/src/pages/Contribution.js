import React from "react";
// import Auth from "../utils/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ContributionCard from "../components/ContributionCard";
import "../assets/css/Contribution.css";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { ADD_USER_DONATION_FROM_SESSION } from "../utils/mutations";

export default function Contribution() {
  const { data } = useQuery(QUERY_USER);
  let user = data?.user || [];

  if (data) {
    user = data.user;
  }

  let adoptedAnimalArr = (user && user.adoptedAnimals) || [];

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  // if (params["session_id"]) {
  //   const sessionId = params["session_id"];
  //   const { data } = useMutation(ADD_USER_DONATION_FROM_SESSION, {
  //     variables: {
  //       sessionId,
  //     },
  //   });
  //   console.log(`updated totaldonation=${JSON.stringify(data)}`);
  // }
  return (
    <div className="contribution-container">
      <div className="header">
        <Header />
      </div>
      <div className="contribution-content text-center">
        <h1 className="my-4">
          {" "}
          {user.firstName} {user.lastName}
        </h1>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <Card style={{ width: "25rem" }}>
                <Card.Header as="h5">Total Animals Adopted: </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {user.adoptedAnimals ? user.adoptedAnimals.length : 0}
                  </Card.Title>
                  <Card.Text>Wow! Great job!</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center">
              <Card style={{ width: "25rem" }}>
                <Card.Header as="h5">Total Donations: </Card.Header>
                <Card.Body>
                  <Card.Title>${user.totalDonations}</Card.Title>
                  <Card.Text>Thank you so much!</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <h3 className="mt-4">Your List of Adopted Animals!</h3>
          {adoptedAnimalArr
            ? adoptedAnimalArr.map((animalAdopted, index) => (
                <div className="card-container m-4 border-0 shadow" key={index}>
                  <ContributionCard animalAdopted={animalAdopted} />
                </div>
              ))
            : null}
        </Container>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
