import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import DonateModal from "./DonateModal";

export default function CheckoutForm() {
  const [donateModalShow, setDonateModalShow] = useState(false);

  return (
    <div>
      <DonateModal
        show={donateModalShow}
        onHide={() => setDonateModalShow(false)}
      />
      <Button variant="success" onClick={() => setDonateModalShow(true)}>
        Donate
      </Button>
    </div>
  );
}
