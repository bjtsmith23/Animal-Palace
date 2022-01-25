import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";

import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51KLThrKTqyKGrYgVVrsKQTTMxSDlTqtuBSF9JcxrJzKFlwOHVKU2BteNUBq1m1cw0wPE3gfCIZXNHMOJzKJUnjjk00xacvbzIb"
);

export default function CheckoutForm({ children, donation }) {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT, {
    variables: { initialDonation: donation },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    getCheckout();
  };

  return (
    <div>
      <Nav.Link onClick={handleSubmit}>{children}</Nav.Link>
    </div>
  );
}
