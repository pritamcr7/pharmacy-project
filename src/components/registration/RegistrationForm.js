import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  InputGroup,
  FormControl,
  Row,
  Col,
  Figure,
  Image,
} from "react-bootstrap";
import "./Registration.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../auth";
import profile from "../../images/profile.png";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

const RegistrationForm = () => {
  const [registration, setRegistration] = useState(null);
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [address, setaddress] = useState("");
  const [cityaddress, setcityaddress] = useState("");
  const [stateaddress, setstateaddress] = useState("");
  const [countryaddress, setcountryaddress] = useState("");
  const [pincode, setpincode] = useState(null);

  const [permaaddress, setpermaaddress] = useState("");
  const [permacityaddress, setpermacityaddress] = useState("");
  const [permastateaddress, setpermastateaddress] = useState("");
  const [permacountryaddress, setpermacountryaddress] = useState("");
  const [permapincode, setpermapincode] = useState(null);

  const [doctor, setdoctor] = useState("");
  const [isLoading, setLoading] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const Address = () => {
    console.log(
      permaaddress,
      permacityaddress,
      permastateaddress,
      permacountryaddress
    );

    setpermaaddress(address);
    setpermacityaddress(cityaddress);
    setpermastateaddress(stateaddress);
    setpermacountryaddress(countryaddress);
    setpermapincode(pincode);
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
            <Row>
              <Col sm={8}>
                <Form.Group className="mb-3">
                  <Form.Label>Registration No.</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={registration}
                    disabled
                  />
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
              </Col>
              <Col sm={4}>
                <Figure className="Profilepicture">
                  <Image
                    width={171}
                    height={180}
                    src={profile}
                    alt="profile"
                    fluid
                  />
                  <Figure.Caption>
                    Upload Profile Picture
                    <div className="mt-3">
                      <form action="/action_page.php">
                        <input type="file" id="myFile" name="filename" />
                      </form>
                    </div>
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
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
              <Col sm={5}>
                <Card style={{ width: "30rem" }}>
                  <Card.Body>
                    <Card.Title>Current Address</Card.Title>
                    <Card.Text>
                      <Form.Group
                        className="mb-1"
                        as={Col}
                        controlId="formGridAddress1"
                      >
                        <Form.Control
                          placeholder="Street"
                          onChange={(e) => setaddress(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-1"
                        as={Col}
                        controlId="formGridAddress2"
                      >
                        <Form.Control
                          placeholder="City"
                          onChange={(e) => setcityaddress(e.target.value)}
                        />
                        <Form.Group
                          className="mb-1"
                          as={Col}
                          controlId="formGridAddress5"
                        >
                          <Form.Control
                            placeholder="Pin Code"
                            onChange={(e) => setpincode(e.target.value)}
                          />
                        </Form.Group>
                      </Form.Group>
                      <Form.Group
                        className="mb-1"
                        as={Col}
                        controlId="formGridAddress3"
                      >
                        <Form.Control
                          placeholder="State"
                          onChange={(e) => setstateaddress(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-1"
                        as={Col}
                        controlId="formGridAddress4"
                      >
                        <Form.Control
                          placeholder="Country"
                          onChange={(e) => setcountryaddress(e.target.value)}
                        />
                      </Form.Group>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={2}>
                <Form.Group as={Col} controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Same As Current Address"
                    onChange={Address}
                  />
                </Form.Group>
              </Col>

              <Col sm={5}>
                <Card style={{ width: "30rem" }}>
                  <Card.Body>
                    <Card.Title>Permanent Address</Card.Title>
                    <Card.Text>
                      <Form.Group
                        className="mb-1"
                        as={Col}
                        controlId="formGridAddress1"
                      >
                        <Form.Control
                          placeholder="Street"
                          value={permaaddress}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-1"
                        as={Col}
                        controlId="formGridAddress2"
                      >
                        <Form.Control
                          placeholder="City"
                          value={permacityaddress}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-1"
                        as={Col}
                        controlId="formGridAddress5"
                      >
                        <Form.Control
                          placeholder="Pin Code"
                          value={permapincode}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-1"
                        as={Col}
                        controlId="formGridAddress3"
                      >
                        <Form.Control
                          placeholder="State"
                          value={permastateaddress}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-1"
                        as={Col}
                        controlId="formGridAddress4"
                      >
                        <Form.Control
                          placeholder="Country"
                          value={permacountryaddress}
                        />
                      </Form.Group>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="mb3">
              <Col>
                <Form.Control className="mt1" placeholder="Contact No." />
              </Col>
              <Col>
                <Form.Control placeholder="Email ID" />
              </Col>
              <Col>
                <Form.Group controlId="formGridBloodGroup">
                  <Form.Select defaultValue="Blood Group">
                    <option>Blood Group</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </Form.Select>
                </Form.Group>
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
