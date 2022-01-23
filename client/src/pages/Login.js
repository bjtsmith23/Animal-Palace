import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/LoginSignup.css";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
          <h2>Login</h2>

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
          {error ? (
            <div>
              <p className="error-text">
                Incorrect credentials. Please try again.
              </p>
            </div>
          ) : null}
          <div className="flex-row flex-end my-4">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <h5 className="have-account">Already have an account?</h5>
            <Link to="/signup">Signup Here &raquo;</Link>
            <br></br>
            <Link to="/main">&laquo; Explore Again</Link>
          </div>
        </Form>
      </div>
    </Row>
  );
}

export default Login;
