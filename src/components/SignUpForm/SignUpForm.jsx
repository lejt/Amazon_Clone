import React from "react";
import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import { Link } from "react-router-dom"; 
import "./SignUpForm.css";

class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  }

  handleChange = (evt) => {
    // The object passed to setState is merged with the current state object
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;

      const user = await signUp(formData);
      console.log(user);
    } catch {
      // An error occurred...
      this.setState({error: 'Sign Up Failed - Try Again'});
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="signup">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
            alt="" 
            className="signup__logo"
        />
      <div className="signup__container">
          <h1>Create account</h1>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Your name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Password again</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable} className="signup__signupButton">Continue</button>
            <p>By creating an account, you agree to Amazon Clone's Conditions of Use and Privacy Notice.</p>
            <hr />
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    )
  }
}

export default SignUpForm;