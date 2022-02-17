import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import  { Link, Navigate } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage({user, setUser}) {
  return (
    <div>
      {user ? <Navigate to="/" /> : <LoginForm setUser={setUser}/>}
    </div>
  )
}
