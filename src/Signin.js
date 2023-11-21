import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    gender: "",
    age: "",
    email: "",
    contact_number: "",
    isSignUp: true,
    errors: [],
  });

  const {password, name, gender, age, email, contact_number, isSignUp, errors } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const nav = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignUp) {
      // Handle signup
      const userData = {
        user: {
          password,
          name,
          gender,
          age,
          email,
          contact_number,
        },
      };

      fetch('https://lifegivers-server.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.errors) {
            // Handle errors from the backend
            setFormData({ ...formData, errors: data.errors });
          } else {
            // Signup successful, do something with data
            // console.log(data);
            localStorage.setItem('user', data)
            setFormData({ ...formData, isSignUp: !isSignUp, errors: [] });
          }
        })
        .catch((error) => {
          // Handle and store other errors
          console.error('Error:', error);
        });
    } else {
      // Handle login
      const loginData = {
        email,
        password,
      };

      fetch('https://lifegivers-server.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            // Handle custom error message from the backend
            setFormData({ ...formData, errors: [data.error] });
          } else {
            // Login successful
            console.log(data);
            nav('/DonationForm');
          }
        })
        .catch((error) => {
          // Handle and store other errors
          console.error('Error:', error);
        });
    }
  };

  const toggleForm = () => {
    setFormData({ ...formData, isSignUp: !isSignUp, errors: [] });
  };

  return (
    <>
      <Container>
        <br />
        <Row className="justify-content-center">
          <Col md={6}>
            {errors.length > 0 && (
              <div className="alert alert-danger">
                <ul>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <Form onSubmit={handleSubmit}>
              {isSignUp && (
                <>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      name="gender"
                      value={gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      name="age"
                      value={age}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                 
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">City</label>
                <input type="text" className="form-control" id="validationCustom03" required />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom04" className="form-label">State</label>
                <select className="form-select" id="validationCustom04" required>
                  <option selected disabled value="">Choose...</option>
                  <option>...</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">Zip</label>
                <input type="text" className="form-control" id="validationCustom05" required />
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
           
                  <Form.Group controlId="contact_number">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="contact_number"
                      value={contact_number}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </>
              )}
               <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      required
                    />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              
              <br />
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              
            
              <Row>
                <Col className="text-left">
                  <Button variant="primary" type="submit">
                    {isSignUp ? "Sign Up" : "Login"}
                    
                  </Button>
                </Col>
                <Col className="text-right">
                  <Button
                    variant="secondary"
                    onClick={toggleForm}
                    className="ml-2"
                  >
                    {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
                  </Button>
                </Col>
              </Row>
              <br />
              
            </Form>
            
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
}

export default SignIn;