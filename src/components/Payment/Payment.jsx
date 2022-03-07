import "./Payment.css";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Navigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useStateValue } from "../../DataLayer/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../DataLayer/reducer";
import axios from "../../axios";

export default function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    useEffect(()=> {
        // generate stripe secret that allows us to charge the customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                url: `/payments/create?total=${getBasketTotal(basket)*100 }`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // only allows the clicking of button once and disables the "buy now" button
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent is the payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders', {replace: true});
        })
    }

    const handleChange = e => {
        // if event is empty, disable button
        setDisabled(e.empty);
        // if error occurs, show error message
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>

                {/* Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React St.</p>
                        <p>Vancouver, BC</p>
                    </div>
                </div>
                {/* Payment section - Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {/* show all products from basket */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment section - Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe API */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded }>
                                    <span>
                                        {processing ? <p>Processing</p> : "Buy Now"}
                                    </span>
                                </button>
                            </div>
                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}