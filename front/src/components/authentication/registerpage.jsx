import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Form, Button } from "react-bootstrap";

const Register = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); 

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        
        const configuration = {
            method: "post",
            url: "http://localhost:3000/register",
            data: {
                firstname,
                lastname,
                username,
                email,
                password,
            },            
        };
        
        axios(configuration)
            .then((result) => {
            setRegister(true);
            setErrorMessage("");             
            console.log(result)
            navigate("/login");
        })
            .catch((error) => {
                setErrorMessage("Login failed. Please check your email and password.");
                console.log(error)
        });
      }

    return (
        <>
        {/* Afficher un message d'erreur s'il y en a un */}
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
             <h2>Register</h2>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        {/* firstname */}
        <Form.Group controlId="formBasicFirtsname">
          <Form.Label>Firtsname</Form.Label>
          <Form.Control 
            type="firtsname" 
            placeholder="Enter firtsname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
             />
        </Form.Group>
        {/* lastname */}
        <Form.Group controlId="formBasicLastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control 
            type="lastname" 
            placeholder="Enter lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
             />
        </Form.Group>
        {/* username */}
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="username" 
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
             />
        </Form.Group>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             />
        </Form.Group>

        {/* submit button */}
        <Button 
            variant="primary" 
            type="submit"
            onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>

         {/* display success message */}
         {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}

      </Form>
        </>
    )   
}

export default Register;