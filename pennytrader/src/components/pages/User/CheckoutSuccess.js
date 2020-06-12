import React, {useState} from 'react';
import { setToast } from "../../../actions/actions"
import { connect } from "react-redux";

function CheckoutSuccess(props) {

    props.setToast("Checkout Successful!")

    return (
        <div id="checkoutsuccess">
            <div>Checkout Successful</div>
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(CheckoutSuccess);