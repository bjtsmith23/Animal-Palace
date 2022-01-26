import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51KLThrKTqyKGrYgVVrsKQTTMxSDlTqtuBSF9JcxrJzKFlwOHVKU2BteNUBq1m1cw0wPE3gfCIZXNHMOJzKJUnjjk00xacvbzIb"
);

export default function DonateModal(props) {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      console.log(data);
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let donateAmount;
    console.log(event.target.donate.value);
    if (event.target.donate.value) {
      donateAmount = parseInt(event.target.donate.value);
    } else {
      donateAmount = parseInt(event.target.getAttribute("data-donation"));
    }

    console.log(donateAmount);
    getCheckout({
      variables: { initialDonation: donateAmount },
    });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How much would you like to donate?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="d-inline-flex">
          <Col>
            <Button onClick={handleSubmit} data-donation={10}>
              $10
            </Button>
          </Col>
          <Col>
            <Button onClick={handleSubmit} data-donation={20}>
              $20
            </Button>
          </Col>
          <Col>
            <Button onClick={handleSubmit} data-donation={50}>
              $50
            </Button>
          </Col>
          <Col>
            <Button onClick={handleSubmit} data-donation={100}>
              $100
            </Button>
          </Col>
        </Row>
        <Form.Group onSubmit={handleSubmit}>
          <Form.Label>Custom Amount: </Form.Label>
          <Form.Control
            type="number"
            name="donate"
            min="1"
            placeholder="Please enter your amount."
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          variant="primary"
          type="submit"
          onClick={() => handleSubmit(this.state.name)}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
