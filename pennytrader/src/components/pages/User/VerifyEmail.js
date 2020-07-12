import React, { useState, useEffect } from 'react';
import { setToast } from "../../../actions/actions"
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import axios from "axios";
import qs from "qs";

function VerifyEmail(props) {

    useEffect(() => {

        axios.put(`${process.env.REACT_APP_API_URL}verify?hash=${qs.parse(props.location.search, { ignoreQueryPrefix: true }).hash}`)
            .then(res => {
                props.setToast("Email Verified")
            })
            .catch(function (error) {
                props.setToast("Could Not Verify Email", "failure")
            })
    }, [])

    return (
        <div id="verify" className="page-padding page-height">
            <div className="page-title">Email Verified Successfully</div>
            <div id="privacy-subtitle" className="page-subtitle">Thank you for creating an account with us.</div>

            <div className="legal-text">
                <br />Return <Link className="link" to="/">Home</Link>.
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(VerifyEmail);