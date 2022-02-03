import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
// import NewOrderPage from "../NewOrderPage/NewOrderPage";
// import AuthPage from "../AuthPage/AuthPage";
// import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";
import CheckoutPage from "../CheckoutPage/CheckoutPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {
        <>
          <NavBar />

          <Routes>
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>

      }
    </main>
  );
}

export default App;
