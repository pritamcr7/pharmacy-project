import React from "react";
import { Card, Button, Form, Row, Col, Badge } from "react-bootstrap";
import { useAuth } from "../auth";

const AppointMentRequisition = () => {
  return (
    <>
      <Card>
        <Card.Header as="h4" className="text-danger text-center">
          Dept. Pathology
        </Card.Header>
        <Card.Body>
          <Card.Title>Haematology</Card.Title>
          <Card.Text>
            <Badge pill bg="success">
              1
            </Badge>
            &nbsp; Complete Haemoglobin
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h4" className="text-danger text-center">
          Dept. Pathology
        </Card.Header>
        <Card.Body>
          <Card.Title>Clinical Pathology</Card.Title>
          <Card.Text>
            <Badge pill bg="success">
              1
            </Badge>
            &nbsp;Urine Routine
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h4" className="text-danger text-center">
          Dept. Pathology
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <Badge pill bg="primary">
              1
            </Badge>
            &nbsp; Thyroid Profile
          </Card.Title>
          <Card.Text>
            <Badge pill bg="success">
              1
            </Badge>
            &nbsp; T3
            <br />
            <Badge pill bg="success">
              2
            </Badge>
            &nbsp; T4
            <br />
            <Badge pill bg="success">
              3
            </Badge>
            &nbsp; TSH
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h4" className="text-danger text-center">
          Dept. Dental
        </Card.Header>
        <Card.Body>
          <Card.Title>Dental</Card.Title>
          <Card.Text>
            <Badge pill bg="success">
              1
            </Badge>
            &nbsp; Extraction of Tooth&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;Qty.&nbsp;
            <Badge pill bg="secondary">
              3
            </Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

const LabRequisition = ({ amount }) => {
  return (
    <>
      <Card>
        <Card.Header className="text-success">Doctor Appointment</Card.Header>
        <Card.Body>
          <Card.Title>Doctor Name: Subhojit Bose</Card.Title>
          <Card.Text>Amount:&nbsp; {amount}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

const Requisition = () => {
  const auth = useAuth();

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return (
    <>
      <Card>
        <Card.Header as="h3" className="text-warning text-center">
          Requisition
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    Invoice Number:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control type="text" value="982737282" disabled />
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="4">
                    Invoice Date:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      value={`${date}${"/"}${
                        month < 10 ? `0${month}` : `${month}`
                      }${"/"}${year}`}
                      disabled
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Registration No:
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control
                      type="text"
                      value={auth.registration}
                      disabled
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="4">
                    Patient:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      value={`${auth.firstName} ${auth.lastName}`}
                      disabled
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="4">
                    Age:
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control type="text" value={auth.age} disabled />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Reference Doctor:
                  </Form.Label>
                  <Col sm="3">
                    <Form.Control type="text" value={auth.doctor} disabled />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <div className="mt-3">
        {auth.booking === "APPOINTMENT" && (
          <LabRequisition amount={auth.amount} />
        )}
        {auth.booking === "LAB" && <AppointMentRequisition />}
      </div>
    </>
  );
};

export default Requisition;
