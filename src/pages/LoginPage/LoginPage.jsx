import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import  { Link, Navigate } from 'react-router-dom';
import './LoginPage.css';
import { useStateValue } from "../../DataLayer/StateProvider";

export default function LoginPage() {

  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div>
      {user ? <Navigate to="/" /> : <LoginForm />}
    </div>
  )
}
