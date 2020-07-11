import React from 'react';
import { connect } from "react-redux"
import { setToast, setImage } from "../actions/actions"

import addtocart from "../images/addtocart.svg"

function Item(props) {

    return (
        <div className="item-container">
            <div className="item">
                <img className="item-image" src={process.env.REACT_APP_API_URL + "images/products/" + props.item.image_name} onClick={(e) => {
                    if (props.item.image_name != "no-image.png") {
                        props.setImage(process.env.REACT_APP_API_URL + "images/products/" + props.item.image_name)
                    }
                }}></img>
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