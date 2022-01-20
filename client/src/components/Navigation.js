import React from "react";
// import Auth from "../utils/auth";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  //   function showNavigation() {
  //     if (true) {
  //       return (
  //         <>
  //           <Nav.Link href="#logout">Logout</Nav.Link>
  //           <Nav.Link href="#stats">Stats</Nav.Link>
  //         </>
  //       );
  //     } else {
  //       return (
  //         <>
  //           <Nav.Link href="#login">Login</Nav.Link>
  //           <Nav.Link href="#signup">Signup</Nav.Link>
  //         </>
  //       );
  //     }
  //   }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Donation App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#logout">Logout</Nav.Link>
            <Nav.Link href="#stats">Stats</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
