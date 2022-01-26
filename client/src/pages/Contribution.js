import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ContributionCard from "../components/ContributionCard";
import "../assets/css/Contribution.css";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

export default function Contribution() {
  const [user, setUser] = useState({});
  const [adoptedAnimalArr, setAdoptedAnimalArr] = useState([]);
  const { data } = useQuery(QUERY_USER);

  useEffect(() => {
    if (data) {
      setUser(data.user);
      setAdoptedAnimalArr(data.user.adoptedAnimals);
    }
  }, [data]);

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
              <Card style={{ width: "20rem" }}>
                <Card.Header as="h5">Total Animals Adopted: </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {user.adoptedAnimals ? user.adoptedAnimals.length : 0}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center">
              <Card style={{ width: "20rem" }}>
                <Card.Header as="h5">Total Donations: </Card.Header>
                <Card.Body>
                  <Card.Title>${user.totalDonations}</Card.Title>
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
