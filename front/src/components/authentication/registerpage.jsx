import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Register = () => {

    return (
        <>
             <h2>Register</h2>
      <Form>
        {/* firstname */}
        <Form.Group controlId="formBasicFirtsname">
          <Form.Label>Firtsname</Form.Label>
          <Form.Control type="firtsname" placeholder="Enter firtsname" />
        </Form.Group>
        {/* lastname */}
        <Form.Group controlId="formBasicLastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control type="lastname" placeholder="Enter lastname" />
        </Form.Group>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </>
    )   
}

export default Register;