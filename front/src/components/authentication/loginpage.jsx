import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Form, Button } from "react-bootstrap";

const Login = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); 
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const configuration = {
            method: "post",
            url: "http://localhost:3000/login",
            data: {                
                email,
                password,
            },            
        };
        
        axios(configuration)
            .then((result) => {
                setLogin(true);
                setErrorMessage(""); // Réinitialiser les messages d'erreur
                console.log(result);
                navigate("/home");
            })
            .catch((error) => {
                // Afficher un message d'erreur en cas d'échec de la connexion
                setErrorMessage("Login failed. Please check your email and password.");
                console.error(error);
            });
    }    

    return (
        <>
             <h2>Login</h2>
             {/* Afficher un message d'erreur s'il y en a un */}
             {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <Form>      
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

        {/* Ne pas afficher le message de connexion réussie ici */}
      </Form>
        </>
    )
}

export default Login;

// const Login = () => { 

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [login, setLogin] = useState(false);

//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         // prevent the form from refreshing the whole page
//         e.preventDefault();
        
//         const configuration = {
//             method: "post",
//             url: "http://localhost:3000/login",
//             data: {                
//                 email,
//                 password,
//             },            
//         };
        
//         axios(configuration)
//             .then((result) => {
//             setLogin(true);            
//             console.log(result)  
//             navigate("/home");         
            
//         })
//             .catch((error) => {
//             error = new Error();
//             console.log(error)
//         });
//     }    

//     return (
//         <>
//              <h2>Login</h2>
//       <Form>      
//         {/* email */}
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control 
//             type="email" 
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//            />
//         </Form.Group>

//         {/* password */}
//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password" 
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//              />
//         </Form.Group>

//         {/* submit button */}
//         <Button 
//             variant="primary" 
//             type="submit"
//             onClick={(e) => handleSubmit(e)}>
//           Submit
//         </Button>

//         {/* display success message */}
//         {login ? (
//           <p className="text-success">You Are Logged Successfully</p>
//         ) : (
//           <p className="text-danger">You Are Not Logged</p>
//         )}
//       </Form>
//         </>
//     )
// }

// export default Login;