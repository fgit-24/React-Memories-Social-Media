import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/SignInForm.module.css";

// Enable sending cookies with every request
axios.defaults.withCredentials = true;

const SignInForm = () => {
  // Get function to set current user from context
  const setCurrentUser = useSetCurrentUser();

  // Set initial form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Post request to the login endpoint
      const { data } = await axios.post("/dj-rest-auth/login/", formData);
      setCurrentUser(data.user); // Set the current user from response
      localStorage.setItem("showSignInToast", "true"); // Optionally store in local storage
      navigate("/"); // Redirect after login
    } catch (err) {
      // Set errors from the response if login fails
      setErrors(err.response?.data);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className={`${styles.Header}`}>
            Sign in to <span>Social</span>
          </h2>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className={`${styles.FormInputs}`}>
            {/* Username input field with error messages below it */}
            <Form.Group controlId="username">
              <Form.Label visuallyHidden>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
                required // Ensure field is required
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className={`${styles.FormInputs}`}>
            {/* Password input field with error messages below it */}
            <Form.Group controlId="password">
              <Form.Label visuallyHidden>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
                required // Ensure field is required
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            {/* Submit button with non-field errors messages below it */}
            <Button variant="primary" type="submit">
              Sign In!
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
        </Row>
      </Form>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <p className={`${styles.SignUpText}`}>
            Don&apos;t have an account? Then please,{" "}
            <Link to="/register">Register</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInForm;