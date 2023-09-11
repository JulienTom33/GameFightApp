import React from "react";
import { Link } from "react-router-dom";

const Register = () => {

    return(
        <div>
            <h3>Register</h3>
    
    <form action="/register" method="post">        
        <div>
            <label for="firstname">Firstname :</label>
            <input type="text" name="firstname" id="firstname" required />
        </div>
        <div>
            <label for="lastname">Lastname :</label>
            <input type="text" name="lastname" id="lastname" required />
        </div>
        <div>
            <label for="username">Username :</label>
            <input type="text" name="username" id="username" required />
        </div>  
        <div>
            <label for="email">Email :</label>
            <input type="text" name="email" id="email" required />
        </div>       
        <div>
            <label for="password">Password :</label>
            <input type="password" name="password" id="password" required />
        </div>
        
        <input type="submit" value="register" />
    </form>
    <div>
        <p>Already have an account?
            <Link to="/login">Login</Link>
        </p>
    </div>
        </div>
    )
}

export default Register;