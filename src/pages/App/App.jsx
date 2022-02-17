import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
// import NewOrderPage from "../NewOrderPage/NewOrderPage";
// import AuthPage from "../AuthPage/AuthPage";
// import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignUpPage/SignUpPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
            <Route path="/signup" element={<SignupPage user={user} setUser={setUser} />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>

      }
    </main>
  );
}

export default App;
