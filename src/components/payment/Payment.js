import React, { useState } from "react";
import { Card, FloatingLabel, Form, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

const Payment = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  let rand = Math.random() * 100000000000;
  const process = auth.booking;
  const [amount, setamount] = useState(process === "LAB" ? 3300 : 1500);

  const handleClick = () => {
    auth.paymentDetails(amount, Math.floor(rand));
    navigate("/successpayment");
  };
  return (
    <>
      {process === "APPOINTMENT" && (
        <Card className="text-center mt-10">
          <Card.Header>Payment For Appointment</Card.Header>
          <Card.Body>
            <Card.Title>Amount Payable: ₹{amount}</Card.Title>
            <Card.Text>
              <h3 className="text-danger">Payment Mode</h3>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Card</Accordion.Header>
                  <Accordion.Body>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter Card Details"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>UPI</Accordion.Header>
                  <Accordion.Body>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter UPI ID"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Corporate/TPA</Accordion.Header>
                  <Accordion.Body>
                    <span className="text-primary mb-3">
                      Amount Payable By Corporate: ₹1000
                    </span>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter Employee ID"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />

                      <Button
                        variant="info"
                        className="mt-3"
                        onClick={() => setamount(amount - 1000)}
                      >
                        Confirm
                      </Button>
                    </FloatingLabel>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Cash</Accordion.Header>
                  <Accordion.Body>
                    Amount to Pay on Cash : {amount}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Text>
          </Card.Body>
          <Button variant="outline-primary" onClick={handleClick}>
            Pay
          </Button>
        </Card>
      )}
      {process === "LAB" && (
        <Card className="text-center mt-10">
          <Card.Header>Payment For Lab Tests</Card.Header>
          <Card.Body>
            <Card.Title>Amount Payable: ₹{amount}</Card.Title>
            <Card.Text>
              <h3 className="text-danger">Payment Mode</h3>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Card</Accordion.Header>
                  <Accordion.Body>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter Card Details"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>UPI</Accordion.Header>
                  <Accordion.Body>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter UPI ID"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Corporate/TPA</Accordion.Header>
                  <Accordion.Body>
                    <span className="text-primary mb-3">
                      Amount Payable By Corporate: ₹2100
                    </span>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter Employee ID"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                    <Button
                      variant="info"
                      className="mt-3"
                      onClick={() => setamount(amount - 2100)}
                    >
                      Confirm
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Cash</Accordion.Header>
                  <Accordion.Body>
                    Amount to Pay on Cash : {amount}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Text>
          </Card.Body>
          <Button variant="outline-primary" onClick={handleClick}>
            Pay
          </Button>
        </Card>
      )}
    </>
  );
};

export default Payment;
