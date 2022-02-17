import React, { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css';
import  { Link } from 'react-router-dom';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div onSubmit={handleSubmit}>
        <form autoComplete="off" className="login">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                alt="" 
                className="login__logo"
            />
            <div className="login__container">
                <h1>Sign-In</h1>
                <div>
                    <label>Email</label><br/>
                    <input className="input" type="text" name="email" value={credentials.email} onChange={handleChange} required />
                </div><br/>
                <div>
                    <label>Password</label><br/>
                    <input className="input" type="password" name="password" value={credentials.password} onChange={handleChange} required />
                </div>
                <p className="error-message">&nbsp;{error}</p>
                
                <button type="submit" className="login__signInButton">Sign In</button>
                <p>
                    By signing-in you agree to the Amazon Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <Link to="/signup">
                    <button className="login__registerButton">Create Your Amazon Account</button>
                </Link>
            </div>
        </form>
    </div>
  );
}