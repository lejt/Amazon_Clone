import React, { useState } from 'react';
// import * as usersService from '../../utilities/users-service';
import './LoginForm.css';
import  { Link, useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then(auth => {
      const user = auth.user;
    })
    .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then((auth)=> {
      console.log('You are registered');
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
          alt="" 
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button className="login__signInButton" onClick={signIn}>Sign In</button>

          <p>
            By signing-in you agree to the Amazon Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>
          <Link to="/signup">
            <button className="login__registerButton" onClick={register}>Create Your Amazon Account</button>
          </Link>
        </form>
      </div>
    </div>
  );



  // const [credentials, setCredentials] = useState({
  //   email: '',
  //   password: ''
  // });
  // const [error, setError] = useState('');

  // function handleChange(evt) {
  //   setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  //   setError('');
  // }

  // async function handleSubmit(evt) {
  //   // Prevent form from being submitted to the server
  //   evt.preventDefault();
  //   try {
  //     // The promise returned by the signUp service method 
  //     // will resolve to the user object included in the
  //     // payload of the JSON Web Token (JWT)
  //     const user = await usersService.login(credentials);
  //     setUser(user);
  //   } catch {
  //     setError('Log In Failed - Try Again');
  //   }
  // }

  // return (
  //   <div onSubmit={handleSubmit}>
  //       <form autoComplete="off" className="login">
  //           <Link to="/">
  //             <img 
  //                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
  //                 alt="" 
  //                 className="login__logo"
  //             />
  //           </Link>
  //           <div className="login__container">
  //               <h1>Sign-In</h1>
  //               <div>
  //                   <label>Email</label><br/>
  //                   <input className="input" type="text" name="email" value={credentials.email} onChange={handleChange} required />
  //               </div><br/>
  //               <div>
  //                   <label>Password</label><br/>
  //                   <input className="input" type="password" name="password" value={credentials.password} onChange={handleChange} required />
  //               </div>
  //               <p className="error-message">&nbsp;{error}</p>
                
  //               <button type="submit" className="login__signInButton">Sign In</button>
  //               <p>
  //                   By signing-in you agree to the Amazon Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
  //               </p>
  //               <Link to="/signup">
  //                   <button className="login__registerButton">Create Your Amazon Account</button>
  //               </Link>
  //           </div>
  //       </form>
  //   </div>
}