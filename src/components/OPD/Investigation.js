import React, { useState } from "react";
import { useAuth } from "../auth";
import { Card, Button, Row, Col, Modal, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ModalForAppointment(props) {
  const navigate1 = useNavigate();
  const auth1 = useAuth();

  const handleClick1 = () => {
    auth1.bookingProcess("APPOINTMENT");
    navigate1("/payment");
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
          Appointment Booking
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="text-primary text-center">
          Registration No.: {auth1.registration}
        </h5>
        <h5 className="text-primary text-center">
          Patient: {`${auth1.firstName} ${auth1.lastName}`}
        </h5>
        <h4>Reference Doctor: {auth1.doctor}</h4>
        <h4>Available Doctor: Dr. Satyajit Bose</h4>
        <div key={`inline-radio`} className="mb-3">
          <span className="mr-3 text-secondary"> Available Time: </span>
          <Form.Check
            inline
            label="09:30 A.M - 10:30 A.M"
            name="group1"
            type="radio"
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="10:30 A.M - 11:30 A.M"
            name="group1"
            type="radio"
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            disabled
            label="11:30 A.M - 12:30 A.M"
            type="radio"
            id={`inline-radio-3`}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick1}>Proceed For Payment</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalForLabTests(props) {
  const navigate2 = useNavigate();
  const auth2 = useAuth();

  const handleClick2 = () => {
    auth2.bookingProcess("LAB");
    navigate2("/payment");
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
          Lab Test Booking
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="text-primary text-center">
          Registration No.: {auth2.registration}
        </h5>
        <h5 className="text-primary text-center">
          Patient: {`${auth2.firstName} ${auth2.lastName}`}
        </h5>
        <h4>Reference Doctor: {auth2.doctor}</h4>
        <h4>Fee Structure For Lab Tests</h4>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Code</th>
              <th>Investigation/Procedure</th>
              <th>Type</th>
              <th>Rate</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>AX3415</td>
              <td>Complete Haemoglobin</td>
              <td>I</td>
              <td>₹450</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>BY6615</td>
              <td>Urine Routine</td>
              <td>I</td>
              <td>₹80</td>
              <td>1</td>
            </tr>
            <tr>
              <td>3</td>
              <td>AX3415</td>
              <td>Thyroid Profile(T3/T4/TSH)</td>
              <td>P</td>
              <td>₹700</td>
              <td>1</td>
            </tr>
            <tr>
              <td>4</td>
              <td>DN3415</td>
              <td>Extraction Of Tooth</td>
              <td>PR</td>
              <td>₹2100</td>
              <td>3</td>
            </tr>
          </tbody>
        </Table>
        <p className="text-center lead">
          Total: <mark>₹3300</mark>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick2}>Proceed For Payment</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Investigation = () => {
  const auth = useAuth();

  const [appointmentModalShow, setAppointmentModalShow] = useState(false);
  const [labModal, setlabModal] = useState(false);
  return (
    <div>
      <Card className="text-center">
        <Card.Header as="h5">OPD Investigation</Card.Header>
        <Card.Body>
          <Card.Title>Registration ID: {auth.registration}</Card.Title>
          <Card.Text>
            <h2 className="text-success">
              {" "}
              Name: {auth.firstName} {auth.lastName}
            </h2>
          </Card.Text>
          <Row>
            <Col>
              <Button
                variant="primary"
                onClick={() => setAppointmentModalShow(true)}
              >
                Book Appointment
              </Button>
            </Col>
            <Col>
              <Button variant="primary" onClick={() => setlabModal(true)}>
                Perform Lab Tests
              </Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-muted">
          Registration Done 0 Days Ago
        </Card.Footer>
      </Card>
      <ModalForAppointment
        show={appointmentModalShow}
        onHide={() => setAppointmentModalShow(false)}
      />
      <ModalForLabTests show={labModal} onHide={() => setlabModal(false)} />
    </div>
  );
};

export default Investigation;
