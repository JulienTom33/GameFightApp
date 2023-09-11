import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div>
            <h3>Login</h3>
    
    <form action="/login" method="post">            
        <div>
            <label for="email">Email :</label>
            <input type="text" name="email" id="email" required />
        </div>       
        <div>
            <label for="password">Password :</label>
            <input type="password" name="password" id="password" required />
        </div>
        
        <input type="submit" value="login" />
    </form>
    <div>
        <p>Don't have an account?
            <Link to="/register">Register</Link>
        </p>
    </div>
        </div>
    )
}

export default Login;