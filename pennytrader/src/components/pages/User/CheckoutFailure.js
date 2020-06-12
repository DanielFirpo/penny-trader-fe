import React, {useState} from 'react';
import { setToast } from "../../../actions/actions"
import { connect } from "react-redux";

function CheckoutFailure(props) {

    props.setToast("Checkout Failed")

    return (
        <div id="checkoutfailure">
            <div>Checkout Failure</div>
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(CheckoutFailure);