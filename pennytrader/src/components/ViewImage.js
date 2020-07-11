import React, { useState, useEffect } from 'react';
import { setImage } from "../actions/actions"
import { connect } from "react-redux";

function ViewImage(props) {

    console.log(props.text);

    let display = "";
    props.text === undefined ? display = "none" : display = ""

    console.log(display);

    return (
        <div id={props.image ? "fullscreen-image-container" : "fullscreen-image-container-hidden"} onClick={()=> {
            props.setImage(undefined);
        }}>
            <div id="close-fullscreen-image" onClick={()=> {
                props.setImage(undefined);
            }}>X</div>
            <img src={props.image} id="fullscreen-image">
            </img>
        </div>
    );
}

const mapStateToProps = state => ({
    image: state.image
});

export default connect(mapStateToProps, { setImage })(ViewImage);