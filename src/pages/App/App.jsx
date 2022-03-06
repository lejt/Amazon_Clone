import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar/NavBar";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignUpPage/SignUpPage";
import Payment from "../../components/Payment/Payment";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        <>

          {/* <NavBar user={user} setUser={setUser} /> */}
          <Routes>
            <Route path="/checkout" element={
              <>
                <NavBar user={user} setUser={setUser} /> 
                <CheckoutPage user={user}/>
              </>
            } />
            <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
            <Route path="/signup" element={<SignupPage user={user} setUser={setUser} />} />
            <Route path="/payment" element={
              <>
                <NavBar user={user} setUser={setUser} />
                <Payment />
                <h1>I am payment route</h1>
              </>
            }>
            </Route>
            <Route path="/" element={
              <>
                <NavBar user={user} setUser={setUser} />
                <HomePage />
              </>
            } />
          </Routes>
        </>

      }
    </main>
  );
}

export default App;
