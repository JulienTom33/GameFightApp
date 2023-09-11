import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Start = () => {
    return (
      <div>
        <h1>Battle Arena</h1>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
      </div>
    );
  };

export default Start;  