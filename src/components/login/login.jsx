import React from 'react';
import { Link } from 'react-router-dom'; 
import './login.css';

const Login = () => {
  return (
    <div className='login' id="login">
      <div className="login-container" >
        <form className="login-form">
          <h2>Login to MedAppoin</h2>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email Address" required autoComplete="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" name="password" required autoComplete="current-password" />
          </div>
          <button type="submit">Login</button>
          <Link to="/forgot-password">Forgot Password?</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;