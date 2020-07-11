import React, {useState} from 'react';
import { setToast } from "../../../actions/actions"
import { connect } from "react-redux";
import {Link} from "react-router-dom"

function CheckoutFailure(props) {

    props.setToast("Checkout Failed", "failure")

    return (
        <div id="checkoutfailure" className="page-padding page-height">
            <div className="page-title">Checkout Canceled</div>
            <div id="privacy-subtitle" className="page-subtitle">Checkout has been canceled and no payment has been made.</div>

            <div className="legal-text">
                Return <Link className="link" to="/">home</Link> or re-attempt checkout <Link className="link" to="/cart">here</Link>.
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(CheckoutFailure);