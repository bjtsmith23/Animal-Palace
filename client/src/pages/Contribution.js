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

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

export default function Contribution() {
  const { data } = useQuery(QUERY_USER);
  let user = data?.user || [];

  if (data) {
    user = data.user;
  }
  console.log(user.totalDonations);

  return (
    <div className="contribution-container">
      <div className="header">
        <Header />
      </div>
      <div className="contribution-content text-center">
        <h1 className="my-4">
          {user.firstName} {user.lastName}
        </h1>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <Card style={{ width: "25rem" }}>
                <Card.Header as="h5">Total Animals Adopted: </Card.Header>
                <Card.Body>
                  <Card.Title>10</Card.Title>
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
          <ContributionCard />
        </Container>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
