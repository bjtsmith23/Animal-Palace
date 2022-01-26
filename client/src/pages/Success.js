import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER_DONATION_FROM_SESSION } from "../utils/mutations";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/Success.css";
import HomeKitty from "../assets/images/home-kitty.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Success() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const donationSessionId = params["session_id"];
  const [addUserDonation, { error }] = useMutation(
    ADD_USER_DONATION_FROM_SESSION
  );

  useEffect(() => {
    async function saveUserDonation() {
      if (donationSessionId) {
        const { data } = await addUserDonation({
          variables: {
            sessionId: donationSessionId,
          },
        });
        console.log(data);
        setTimeout(() => {
          window.location.assign("/contribution");
        }, 3000);
      }
    }

    saveUserDonation();
  }, [addUserDonation]);

  return (
    <div>
      <Header />
      <Row className="success-container text-center">
        <Col className="success-text">
          <h1>Success!</h1>
          <h2>Thank you for your donation!</h2>
          <h2>You will soon be redirected to your contribution page</h2>
        </Col>

        <img src={HomeKitty} style={{ width: "100vh", height: "440px" }} />
      </Row>
      <Footer />
    </div>
  );
}

export default Success;
