import React, { useState, useEffect } from 'react';
import { setToast } from "../../../actions/actions"
import { connect } from "react-redux";
import { Link } from "react-router-dom"

function VerifyPrompt(props) {

    return (
        <div id="verify-prompt" className="page-padding page-height">
            <div className="page-title">Email Verification</div>
            <div id="privacy-subtitle" className="page-subtitle">To complete the registration process, please check your emails.</div>

            <div className="legal-text">
                We've sent instuctions to your email address. To finalize your account, check your emails and click the 'Verify Account' button. 
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(VerifyPrompt);