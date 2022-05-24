import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import "./Registration.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../auth";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

const RegistrationForm = () => {
  const [registration, setRegistration] = useState(null);
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [address, setaddress] = useState("");
  const [permaaddress, setpermaaddress] = useState("");
  const [doctor, setdoctor] = useState("");
  const [isLoading, setLoading] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const Address = () => {
    setpermaaddress(address);
  };

  let today = new Date();

  let age_now = today.getFullYear() - startDate.getFullYear();
  let m = today.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
    age_now--;
  }

  let rand = Math.random() * 10000000;
  useEffect(() => {
    setRegistration(Math.floor(rand));
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    setRegistration(null);
    auth.patientDetails(registration, firstName, lastName, startDate, doctor);
    simulateNetworkRequest().then(() => {
      navigate("/investigate");
    });
  };

  return (
    <div>
      <div className="registration">Registration Form</div>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Registration No.</Form.Label>
              <Form.Control type="text" placeholder={registration} disabled />
              <Form.Text className="text-muted">
                Note Registration No. For Future Reference
              </Form.Text>
            </Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>First and Last name</InputGroup.Text>
              <FormControl
                aria-label="First name"
                onChange={(e) => setfirstName(e.target.value)}
              />
              <FormControl
                aria-label="Last name"
                onChange={(e) => setlastName(e.target.value)}
              />
            </InputGroup>
            <Row className="mb-3">
              <Col sm={2}>
                <Form.Group>
                  <Form.Label>Date Of Birth:</Form.Label>
                  <DatePicker
                    selected={startDate}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setStartDate(date)}
                  />
                </Form.Group>
              </Col>
              <Col sm={2}>
                <Form.Group>
                  <Form.Label>Age:</Form.Label>
                  <Form.Control type="text" placeholder={age_now} disabled />
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group controlId="formGridGender">
                  <Form.Label>Religion</Form.Label>
                  <Form.Select defaultValue="...">
                    <option>Hinduism</option>
                    <option>Islam</option>
                    <option>Christianity</option>
                    <option>Buddhism</option>
                    <option>Atheism/Agnosticism</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group controlId="formGridGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select defaultValue="Male">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col sm={2}>
                <Form.Group controlId="formGridNationality">
                  <Form.Label>Nationality:</Form.Label>
                  <Form.Control type="text" placeholder="Nationality" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Current Address</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  onChange={(e) => setaddress(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Same As Current Address"
                  onChange={Address}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Permanent Address</Form.Label>
                <Form.Control placeholder="1234 Main St" value={permaaddress} />
              </Form.Group>
            </Row>

            <Row className="mb3">
              <Col>
                <Form.Control placeholder="Contact No." />
              </Col>
              <Col>
                <Form.Control placeholder="Email ID" />
              </Col>
              <Col>
                <Form.Control placeholder="Blood Group" />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Reference Doctor:
                  </Form.Label>
                  <Col sm="2">
                    <Form.Control
                      type="text"
                      onChange={(e) => setdoctor(e.target.value)}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  className="mt-3"
                  variant="primary"
                  type="submit"
                  disabled={isLoading}
                  onClick={!isLoading ? handleClick : null}
                >
                  {isLoading ? "Loading…" : "Submit"}
                </Button>
              </Col>
              <Col>
                <Button className="mt-3" variant="danger" type="submit">
                  Print Card
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegistrationForm;
