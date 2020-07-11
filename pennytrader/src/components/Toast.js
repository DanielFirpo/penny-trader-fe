import React, { useState, useEffect } from 'react';
import { setToast } from "../actions/actions"
import { connect } from "react-redux";
import success from "../images/success.svg"
import failure from "../images/failure.svg"
import close from "../images/close.svg"

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
        <div style={{ display: display }} id="toast">
            <img id="toast-image" src={props.type == "success" ? success : failure} style={{backgroundColor: props.type == "success" ? "#409c35" : "#cc0000"}}></img>
            {props.text}
            <img id="toast-close" src={close} onClick={() => {
                props.setToast(undefined, undefined);
            }}></img>
        </div>
    );
}

const mapStateToProps = state => ({
    text: state.toast.text,
    type: state.toast.type
});

export default connect(mapStateToProps, { setToast })(Toast);