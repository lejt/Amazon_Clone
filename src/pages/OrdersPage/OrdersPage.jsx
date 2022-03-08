import React, { useState, useEffect } from 'react';
import "./OrdersPage.css";
import { db } from "../../firebase";
import { useStateValue } from "../../DataLayer/StateProvider";
import { collection, onSnapshot, orderBy, doc, query } from "firebase/firestore";
import Order from "../../components/Order/Order";

export default function OrdersPage() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            const orderHistRef = collection(db, 'users', user?.uid, "orders");
            onSnapshot(query(orderHistRef, orderBy('created', 'desc')), snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your orders</h1>
            {console.log(orders)}
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}