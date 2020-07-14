import React, { useState, useEffect } from 'react';
import qs from "qs";
import { axiosWithAuth } from "../../../auth/AxiosWithAuth"
import { Link } from "react-router-dom"
import CartItem from '../../CartItem';
import { setToast } from '../../../actions/actions';
import {connect} from "react-redux"

function Order(props) {

    const [order, setOrder] = useState();
    const [status, setStatus] = useState(0);

    useEffect(() => {
        axiosWithAuth().get(`${process.env.REACT_APP_API_URL}admin/order?id=${qs.parse(props.location.search, { ignoreQueryPrefix: true }).id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.order.status === 0) {
                    res.data.order.readableStatus = "Placed"
                }
                else if (res.data.order.status === 1) {
                    res.data.order.readableStatus = "Shipped"
                }
                else if (res.data.order.status === 2) {
                    res.data.order.readableStatus = "Delivered"
                }
                setOrder(res.data.order);
                setStatus(res.data.order.status)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        if (order && status != order.status) {
            axiosWithAuth().put(`${process.env.REACT_APP_API_URL}admin/orderstatus?id=${qs.parse(props.location.search, { ignoreQueryPrefix: true }).id}`, { status: status })
                .then(res => {
                    //reload page
                    props.setToast("Order Status Updated")
                    window.location.reload();
                    console.log("status updated");
                })
                .catch(function (error) {
                    window.location.reload();
                    console.log(error)
                })
        }
    }, [status])

    return (
        <div id="order" className="page-height page-padding">
            <h1 className="page-title">Order</h1>
            {
                order ?
                    <div>
                        <Link to={{ pathname: 'shippinglabel', search: `?id=${order.id}` }}>
                            <div className="button">Print Shipping Label</div>
                        </Link>
                        <div>
                            Set Order Status:
                            <br />
                            <label>
                                Placed
                                <input type="checkbox" name="listed" checked={status === 0} onChange={() => { setStatus(0) }} />
                            </label>
                            <label>
                                Shipped
                                <input type="checkbox" name="unlisted" checked={status === 1} onChange={() => { setStatus(1) }} />
                            </label>
                            <label>
                                Delivered
                                <input type="checkbox" name="sold" checked={status === 2} onChange={() => { setStatus(2) }} />
                            </label>
                        </div>
                        <p className="order-info">Status: {order.readableStatus}</p>
                        <p className="order-info">Total: ${(order.total / 100)}</p>
                        <p className="order-info">First Name: {order.first_name}</p>
                        <p className="order-info">Last Name: {order.last_name}</p>
                        <p className="order-info">Address {order.address}</p>
                        <p className="order-info">City: {order.city}</p>
                        <p className="order-info">State: {order.state}</p>
                        <p className="order-info">ZIP: {order.zip}</p>
                        <p className="order-info">Phone: {order.phone}</p>
                        <p className="order-info">Email: {order.email}</p>
                        <p className="order-info">Date Placed: {order.date.substring(0, 16)}</p>
                        {
                            order.items.map((item) => {
                                return (
                                    <CartItem item={item} hideButton="OF COURSE!"></CartItem>
                                    // <div id="product-container">
                                    //     <img id="product-image" src={process.env.REACT_APP_API_URL + "images/products/" + item.image_name}></img>
                                    //     <div id="product-info-list">
                                    //         <p className="product-info">Name: {item.name}</p>
                                    //         <p className="product-info">Year: {item.year}</p>
                                    //         <p className="product-info">Price: ${item.price / 100}</p>
                                    //         <p className="product-info">Description: {item.description}</p>
                                    //     </div>
                                    // </div>
                                )
                            })
                        }
                    </div>
                    :
                    <p>Loading...</p>
            }
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(Order);