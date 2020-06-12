import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../../../auth/AxiosWithAuth"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { setToast } from "../../../actions/actions"
import axios from "axios";

function Cart(props) {

    const [products, setProducts] = useState([]);
    const [update, setUpdate] = useState();

    useEffect(() => {
        fetchProducts();
    }, [update])

    function fetchProducts() {
        let itemIDs = JSON.parse(localStorage.getItem("cart"))
        if (!itemIDs) {
            itemIDs = []
        }
        axiosWithAuth()
            .get("/products/product?ids=" + JSON.stringify(itemIDs))
            .then(function (response) {
                setProducts(response.data.data)
            })
            .catch(function (error) {
                console.log("Error fetching products", error.response)
            })
    }

    let priceTotal = 0.00;

    return (
        <div id="products">
            <h1 className="page-title">Cart</h1>
            <div id="product-list">
                {
                    products.map((item) => {
                        priceTotal += item.price;
                        return (
                            <div id="product-container">
                                <img id="product-image" src={process.env.REACT_APP_API_URL + "images/products/" + item.image_name}></img>
                                <div id="product-info-list">
                                    <p className="product-info">Name: {item.name}</p>
                                    <p className="product-info">Year: {item.year}</p>
                                    <p className="product-info">Price: ${item.price / 100}</p>
                                    <p className="product-info">Description: {item.description}</p>
                                </div>
                                <div id="product-buttons-container">
                                    <div className="product-button" onClick={() => {
                                        let cartArray = JSON.parse(localStorage.getItem("cart"));
                                        cartArray = cartArray.filter((value, index, arr) => {
                                            return value != item.id;
                                        })
                                        localStorage.setItem("cart", JSON.stringify(cartArray))
                                        setUpdate(Date.now())
                                        console.log(Date.now());
                                    }}>Remove</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="checkout">
                <div>Total: ${priceTotal / 100}</div>
                <div className="button" onClick={() => {
                    axios.post(`${process.env.REACT_APP_API_URL}payment/pay`, { products: products })
                        .then(res => {
                            let text = res.data
                            console.log("successfully got paypal checkout URL: " + text)
                            window.location.assign(text)
                        })
                        .catch(function (error) {
                            console.log(error)
                        })
                }}>Checkout</div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(Cart);