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
  "pk_test_51KMGDMCc7AfbHpKadQV7HbBx60IoMbADpkKIKE0rWo4ifYrxuppHZp2JZjsPv6LbTIPo0y5TnhTtf8zQ5eqSNnF500wyDoYloD"
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

  const handleSubmit = (event) => {
    event.preventDefault();
    let donateAmount;
    if (event.target.getAttribute("data-donation")) {
      donateAmount = parseInt(event.target.getAttribute("data-donation"));
    } else {
      const customInput = document.querySelector("#custom-donation");
      donateAmount = parseInt(customInput.value);
    }

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
        <Form.Group>
          <Form.Label>Custom Amount: </Form.Label>
          <Form.Control
            id="custom-donation"
            type="number"
            name="donate"
            min="1"
            placeholder="Please enter your amount."
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
