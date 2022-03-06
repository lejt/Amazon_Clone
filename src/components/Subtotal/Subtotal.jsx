import "./Subtotal.css";
import React from "react";
import CurrencyFormat from "react-currency-format"; 
import { useStateValue } from "../../DataLayer/StateProvider"; 
import { getBasketTotal } from "../../DataLayer/reducer";
import { useNavigate } from "react-router-dom";

export default function Subtotal() {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value)=> (
                    <>
                        <p>
                            Subtotal ({basket.length} items): 
                            <strong>{value}</strong>
                    
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e=> navigate('/payment')}>Proceed to Checkout</button>
        </div>
    )
}