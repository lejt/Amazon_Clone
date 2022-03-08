import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { getUser } from '../../utilities/users-service';
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar/NavBar";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignUpPage/SignUpPage";
import Payment from "../../components/Payment/Payment";
import OrdersPage from "../OrdersPage/OrdersPage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { auth } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "../../DataLayer/StateProvider";

const promise = loadStripe(
  "pk_test_51KQxaQIdi9UJJW0jgeryB73SUH4nyfRmUJhUe8K7yzLMldAVoRy1sUer59afoyu9e9gIxZaF3X17jeLpWXIYSP7W00WSlzEpWW"
);

function App() {
  const [{}, dispatch] = useStateValue();
  // const [user, setUser] = useState(getUser());

  useEffect(()=> {

    onAuthStateChanged(auth, user => {
      console.log('The user is >>>', user);

      // if user is logged in or was previously logged in, set user to authUser
      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    // auth.onAuthStateChanged(authUser => {
    //   console.log('The user is >>>', authUser);

    //   // if user is logged in or was previously logged in, set user to authUser
    //   if (authUser) {
    //     dispatch({
    //       type: 'SET_USER',
    //       user: authUser
    //     })
    //   } else {
    //     dispatch({
    //       type: 'SET_USER',
    //       user: null
    //     })
    //   }


    
  },[]);

  return (
    <main className="App">
      {
        <>

          {/* <NavBar user={user} setUser={setUser} /> */}
          <Routes>
            <Route path="/checkout" element={
              <>
                <NavBar /> 
                <CheckoutPage />
              </>
            } />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/signup" element={<SignupPage user={user} setUser={setUser} />} /> */}
            <Route path="/payment" element={
              <>
                <NavBar />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            } />
            <Route path="/orders" element={
              <>
                <NavBar /> 
                <OrdersPage />
              </>
            } />
            <Route path="/" element={
              <>
                <NavBar />
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
