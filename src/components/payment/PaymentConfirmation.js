import React from "react";
import { useAuth } from "../auth";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaymentConfirmation = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Card
        bg="success"
        key="Success"
        text="white"
        style={{
          width: "30rem",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "200px",
        }}
        className="mb-2 text-center"
      >
        <Card.Header>Thank You!</Card.Header>
        <Card.Body>
          <Card.Title>&#10004; Payment Complete</Card.Title>
          <Card.Text>
            Transaction ID : {auth.paymentID}.<br />
            Thank you for completing the payment! You will shortly receive an
            email of your payment.
          </Card.Text>
          <Button
            type="submit"
            class="btn-secondary"
            onClick={() => navigate("/requisition")}
          >
            Show details
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default PaymentConfirmation;
