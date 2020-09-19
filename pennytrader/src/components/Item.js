import React, { useEffect, useState } from 'react';
import { connect } from "react-redux"
import { setToast, setImage } from "../actions/actions"

import addtocart from "../images/addtocart.svg"

function Item(props) {

    const [imageSelection, setImageSelection] = useState(props.item.front_image_name);

    return (
        <div className="item-container">
            <div className="item">
                <img className="item-image" src={imageSelection == "no-image.png" ? process.env.REACT_APP_API_URL + "images/products/no-image.png" : imageSelection} onClick={(e) => {
                    if (props.item.image_name != "no-image.png") {
                        props.setImage(props.item.image_name)
                    }
                }}></img>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "20px", cursor: "pointer" }} onClick={() => { setImageSelection(props.item.front_image_name)}}>&#60;</div>
                    <div style={{ fontSize: "20px", cursor: "pointer" }} onClick={() => { setImageSelection(props.item.back_image_name)}}>&gt;</div>
                </div>
                <p className="item-title">{props.item.year} Penny - {props.item.name}</p>
                <p className="item-description" title={props.item.description}>{props.item.description.length > 140 ? props.item.description.substring(0, 140) + "..." : props.item.description}</p>
                <div className="item-price-and-add">
                    <p className="item-price">${(props.item.price / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <img src={addtocart} className="add-to-cart-button" onClick={() => {
                        let cartArray = JSON.parse(localStorage.getItem("cart"));
                        if (!cartArray) {
                            cartArray = [];
                        }
                        cartArray.push(props.item.id)
                        let set = new Set(cartArray);
                        cartArray = [...set]
                        localStorage.setItem("cart", JSON.stringify(cartArray))
                        props.setToast("Item Added to Cart")
                    }}></img>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast, setImage })(Item);