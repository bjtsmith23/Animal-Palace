import React from "react";
// import Auth from "../utils/auth";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLogo from "../assets/images/brand-img.png";

function Navigation() {
  //   function showNavigation() {
  //     if (true) {
  //       return (
  //         <>
  //           <Nav.Link href="/logout">Logout</Nav.Link>
  //           <Nav.Link href="/contribution">Stats</Nav.Link>
  //         </>
  //       );
  //     } else {
  //       return (
  //         <>
  //           <Nav.Link href="/login">Login</Nav.Link>
  //           <Nav.Link href="/signup">Signup</Nav.Link>
  //         </>
  //       );
  //     }
  //   }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="dog paw logo"
            src={NavLogo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          Donation App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#logout">Logout</Nav.Link>
            <Nav.Link href="/contribution">Contribution</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
