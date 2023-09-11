import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Start = () => {
    return (
      <div>
        <h1>Battle Arena</h1>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    );
  };

export default Start;  