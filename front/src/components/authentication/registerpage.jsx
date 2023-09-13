import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Form, Button } from "react-bootstrap";

const Register = () => {    
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

      </Form>
        </>
    )   
}

export default Register;