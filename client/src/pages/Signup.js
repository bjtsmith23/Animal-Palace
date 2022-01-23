import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/LoginSignup.css";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Row className="register-img align-items-center">
      <div className="form-container">
        <Col className="img-holder"></Col>

        <Form className="align-items-center" onSubmit={handleFormSubmit}>
          <h2>Signup</h2>
          <div className="d-flex">
            <Form.Group>
              <div className="flex-row my-2">
                <Form.Control
                  style={{ width: "12rem" }}
                  type="firstName"
                  placeholder="First"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group style={{ paddingLeft: "1rem" }}>
              <div className="flex-row my-2">
                <Form.Control
                  style={{ width: "12rem" }}
                  type="lastName"
                  placeholder="Last"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <div className="flex-row space-between my-3">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <div className="flex-row space-between my-2">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                type="password"
                id="password"
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <div className="flex-row flex-end my-4">
            <Button variant="primary" type="submit">
              Submit
            </Button>

            <h5 className="have-account">Don't have an account?</h5>
            <Link to="/login">Login Here &raquo;</Link>
            <br></br>
            <Link to="/main">&laquo; Explore Again </Link>
          </div>
        </Form>
      </div>
    </Row>
  );
}

export default Signup;
