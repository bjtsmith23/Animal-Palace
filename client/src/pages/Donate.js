import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Nav from "react-bootstrap/Nav";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import "../assets/css/Donate.css";

import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51KLThrKTqyKGrYgVVrsKQTTMxSDlTqtuBSF9JcxrJzKFlwOHVKU2BteNUBq1m1cw0wPE3gfCIZXNHMOJzKJUnjjk00xacvbzIb"
);

export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT, {
    variables: { initialDonation: 10 },
  });

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   window
  //     .fetch("/create-payment-intent", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //     })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setClientSecret(data.clientSecret);
  //     });
  // }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    getCheckout();
    // const payload = await stripe.confirmCardPayment(clientSecret, {
    //   payment_method: {
    //     card: elements.getElement(CardElement),
    //   },
    // });

    // if (payload.error) {
    //   setError(`Payment failed ${payload.error.message}`);
    //   setProcessing(false);
    // } else {
    //   setError(null);
    //   setProcessing(false);
    //   setSucceeded(true);
    // }
  };

  return (
    <div>
      <Nav.Link onClick={handleSubmit}>Donate</Nav.Link>
    </div>
    // <Row>
    //   <Col className="donate-container">
    //     <form id="payment-form" onSubmit={handleSubmit}>
    //       <CardElement
    //         id="card-element"
    //         options={cardStyle}
    //         onChange={handleChange}
    //       />
    //       <Button disabled={processing || disabled || succeeded} id="submit">
    //         <span id="button-text">
    //           {processing ? (
    //             <div className="spinner" id="spinner"></div>
    //           ) : (
    //             "Pay now"
    //           )}
    //         </span>
    //       </Button>
    //       {/* Show any error that happens when processing the payment */}
    //       {error && (
    //         <div className="card-error" role="alert">
    //           {error}
    //         </div>
    //       )}
    //       {/* Show a success message upon completion */}
    //       <p className={succeeded ? "result-message" : "result-message hidden"}>
    //         Payment succeeded, see the result in your
    //         <a href={`https://dashboard.stripe.com/test/payments`}>
    //           {" "}
    //           Stripe dashboard.
    //         </a>{" "}
    //         Refresh the page to pay again.
    //       </p>
    //     </form>
    //   </Col>
    // </Row>
  );
}
