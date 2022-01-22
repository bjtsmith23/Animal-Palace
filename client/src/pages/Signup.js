import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
// import { LOGIN } from "../utils/mutations";
// import Auth from "../utils/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/LoginSignup.css";

function Signup(props) {
  //   const [formState, setFormState] = useState({ email: "", password: "" });
  //   const [login, { error }] = useMutation(LOGIN);

  //   const handleFormSubmit = async (event) => {
  //     event.preventDefault();
  //     try {
  //       const mutationResponse = await login({
  //         variables: { email: formState.email, password: formState.password },
  //       });
  //       const token = mutationResponse.data.login.token;
  //       Auth.login(token);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormState({
  //       ...formState,
  //       [name]: value,
  //     });
  //   };

  return (
    <Row className="register-img align-items-center">
      <div className="form-container">
        <Col className="img-holder"></Col>

        <Form
          className="align-items-center"
          //   onSubmit={handleFormSubmit}
        >
          <h2>Signup</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="flex-row space-between my-2">
              <Form.Control
                type="text"
                placeholder="Username"
                name="text"
                type="text"
                // id="text"
                // onChange={handleChange}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="flex-row space-between my-3">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                type="email"
                // id="email"
                // onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="flex-row space-between my-2">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                type="password"
                // id="pwd"
                // onChange={handleChange}
              />
            </div>
          </Form.Group>
          {/* {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null} */}
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
