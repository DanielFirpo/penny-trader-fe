import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../../../auth/AxiosWithAuth"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { setToast } from "../../../actions/actions"
import axios from "axios";
import CartItem from '../../CartItem';

function Cart(props) {

    const [products, setProducts] = useState([]);
    const [update, setUpdate] = useState();
    const [taxAndShipping, setTaxAndShipping] = useState({});

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL + "payment/taxandshipping")
            .then(function (response) {
                setTaxAndShipping(response.data.data)
            })
            .catch(function (error) {
                console.log("Error fetching tax and shipping", error.response)
            })
    }, [])

    useEffect(() => {
        fetchProducts();
    }, [update])

    function fetchProducts() {
        let itemIDs = JSON.parse(localStorage.getItem("cart"))
        if (!itemIDs) {
            itemIDs = []
        }
        if (itemIDs.length > 0) {
            axios
                .get(process.env.REACT_APP_API_URL + "products/product?ids=" + JSON.stringify(itemIDs))
                .then(function (response) {
                    setProducts(response.data.data)
                })
                .catch(function (error) {
                    console.log("Error fetching products", error.response)
                })
        } else {
            setProducts([]);
        }
    }

    let priceTotal = 0.00;

    return (
        <div id="products" className="page-height page-padding">
            <h1 id="cart-title">Your Cart</h1>
            <div id="product-list">
                {
                    products.map((item) => {
                        priceTotal += item.price;
                        return (
                            <CartItem item={item} setUpdate={setUpdate} />
                            // <div id="product-container">
                            //     <img id="product-image" src={process.env.REACT_APP_API_URL + "images/products/" + item.image_name}></img>
                            //     <div id="product-info-list">
                            //         <p className="product-info">Name: {item.name}</p>
                            //         <p className="product-info">Year: {item.year}</p>
                            //         <p className="product-info">Price: ${item.price / 100}</p>
                            //         <p className="product-info">Description: {item.description}</p>
                            //     </div>
                            //     <div id="product-buttons-container">
                            //         <div className="product-button" onClick={() => {
                            //             let cartArray = JSON.parse(localStorage.getItem("cart"));
                            //             cartArray = cartArray.filter((value, index, arr) => {
                            //                 return value != item.id;
                            //             })
                            //             localStorage.setItem("cart", JSON.stringify(cartArray))
                            //             setUpdate(Date.now())
                            //         }}>Remove</div>
                            //     </div>
                            // </div>
                        )
                    })
                }
            </div>
            <div>

                <div className="cart-breakdown-container">
                    <p className="cart-breakdown">Subtotal </p>
                    <div className="cart-breakdown-division"></div>
                    <p className="cart-breakdown-value">${(priceTotal / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>

                <div className="cart-breakdown-container">
                    <p className="cart-breakdown">Tax </p>
                    <div className="cart-breakdown-division"></div>
                    <p className="cart-breakdown-value">${((priceTotal / 100) * (taxAndShipping.tax_rate / 10000)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>

                <div className="cart-breakdown-container">
                    <p className="cart-breakdown">Shipping </p>
                    <div className="cart-breakdown-division"></div>
                    <p className="cart-breakdown-value">${(taxAndShipping.shipping_fee / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>

                <div className="cart-linebreak"></div>

                <div className="cart-checkout">
                    <p className="cart-total">Total</p>
                    <div className="cart-breakdown-division"></div>
                    <p className="cart-total-value">${((priceTotal / 100) + (taxAndShipping.shipping_fee / 100) + (priceTotal / 100) * (taxAndShipping.tax_rate / 10000)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    {/* TODO: Get min purchase amount from server and don't allow them to checkout if subtotal not met. Also get and display tax rate/shipping fee */}
                </div>
            </div>
            <div id="cart-buttons">
                <Link to={"/"} className="cart-back-to-shopping">&#60; Continue Shopping</Link>
                <Link to={products.length > 0 ? "/checkout" : "/cart"} id="checkout-button" className={products.length > 0 ? "button" : "button-disabled"} >Checkout &gt;</Link>
            </div>

        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(Cart);