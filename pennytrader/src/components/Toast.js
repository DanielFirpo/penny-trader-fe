import React, { useState, useEffect } from 'react';
import { setToast } from "../actions/actions"
import { connect } from "react-redux";

function Toast(props) {

    useEffect(() => {
        //End toast after delay
        if (props.text) {
            setTimeout(function () {
                props.setToast(undefined, undefined);
            }, 7000);
        }
    }, [props])

    console.log(props.text);

    let display = "";
    props.text === undefined ? display = "none" : display = ""

    console.log(display);

    return (
        <div style={{ backgroundColor: "" + props.color, display: display }} id="toast">
            {props.text}
        </div>
    );
}

const mapStateToProps = state => ({
    text: state.toast.text,
    color: state.toast.color
});

export default connect(mapStateToProps, { setToast })(Toast);