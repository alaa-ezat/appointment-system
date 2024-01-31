import React from 'react';
import './signup.css'; 
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup' id="register">
      <div className="register-container" >
        <form className="register-form">
          <h2>Register for MedAppoin</h2>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email Address" required autoComplete="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" name="password" required autoComplete="new-password" />
          </div>
          <button type="submit">Register</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
