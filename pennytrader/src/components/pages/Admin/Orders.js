import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from "../../../auth/AxiosWithAuth";

import { Link } from "react-router-dom"

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axiosWithAuth().get(`${process.env.REACT_APP_API_URL}admin/orders?status=0&searchTerm=test`)
            .then(res => {
                console.log(res.data)
                setOrders(res.data.orders);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return (
        <div id="orders" className="page-height page-padding">
            <h1 className="page-title">Orders</h1>
            {
                orders.map((order) => {
                    return (
                    <Link className="admin-order-info" to={{ pathname: 'order', search: `?id=${order.id}` }}>
                        <div id="order-info-list">
                            <p className="order-info">Total: ${(order.total / 100)}</p>
                            <p className="order-info">First Name: {order.first_name}</p>
                            <p className="order-info">Last Name: {order.last_name}</p>
                            <p className="order-info">Address {order.address}</p>
                            <p className="order-info">City: {order.city}</p>
                            <p className="order-info">State: {order.state}</p>
                            <p className="order-info">ZIP: {order.zip}</p>
                            <p className="order-info">Phone: {order.phone}</p>
                            <p className="order-info">Email: {order.email}</p>
                            {/* TODO: format date to be less ugly */}
                            <p className="order-info">Date Placed: {order.date.substring(0, 10)}</p>
                        </div>
                    </Link>
                    )
                })
            }
        </div>
    );
}

export default Orders;