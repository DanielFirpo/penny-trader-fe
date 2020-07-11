import React from 'react';
import { connect } from "react-redux"
import { setImage, setToast } from "../actions/actions"

function CartItem(props) {

    return (
        <div className="cart-item-container">
            <div className="cart-item">
                <img className="cart-item-image" src={process.env.REACT_APP_API_URL + "images/products/" + props.item.image_name} onClick={(e) => {
                    if (props.item.image_name != "no-image.png") {
                        props.setImage(process.env.REACT_APP_API_URL + "images/products/" + props.item.image_name)
                    }
                }}></img>
                <div className="cart-item-column">
                    <div className="cart-item-title-and-price">
                        <p className="cart-item-title">{props.item.year} Penny - {props.item.name}</p>
                        <p className="cart-item-price">${(props.item.price / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <p className="cart-item-description" title={props.item.description}>{props.item.description.length > 140 ? props.item.description.substring(0, 140) + "..." : props.item.description}</p>
                    {!props.hideButton ?
                        <div className="cart-item-remove-button" onClick={() => {
                            let cartArray = JSON.parse(localStorage.getItem("cart"));
                            cartArray = cartArray.filter((value, index, arr) => {
                                return value != props.item.id;
                            })
                            localStorage.setItem("cart", JSON.stringify(cartArray))
                            props.setUpdate(Date.now())
                            props.setToast("Item Removed from Cart")
                        }}>Remove</div>
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setImage, setToast })(CartItem);