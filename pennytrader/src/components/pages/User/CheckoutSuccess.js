import React, { useState, useEffect } from 'react';
import { setToast } from "../../../actions/actions"
import { connect } from "react-redux";
import { Link } from "react-router-dom"

function CheckoutSuccess(props) {

    useEffect(() => {
        props.setToast("Checkout Successful")
        localStorage.removeItem("cart")
    }, [])

    return (
        <div id="checkoutsuccess" className="page-padding page-height">
            <div className="page-title">Checkout Successful</div>
            <div id="privacy-subtitle" className="page-subtitle">Thank you for your purchase!</div>

            <div className="legal-text">
                We've sent a confirmation to the email you provided.
                <br />Your order should arrive between 4-7 business days. <Link className="link" to="/">Home</Link>.
                <br /><br /><br />If you have any issues with your order please don't hesitate to <Link className="link" to="/contact">Contact Us</Link>.
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(CheckoutSuccess);