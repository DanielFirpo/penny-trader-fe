import React, { useState, forceUpdate, useEffect } from 'react';

import { Link } from "react-router-dom";
import { withRouter, useHistory } from 'react-router-dom'

import logo from "../images/logo.png"
import account from "../images/account.svg"
import cart from "../images/cart.svg"

function Footer() {

    const history = useHistory();

    return (
        <div id="footer">
            <div id="footer-row" className="page-padding">
                <div className="footer-column">
                    <div className="footer-column-title">About Us</div>
                    <span id="footer-about">Welcome to Willco, your number one <br/>  source for all things pennies. We're dedicated <br/> to giving you the very best coins, with a <br/> focus on quality, uniqueness and convenience.</span>
                </div>
                <div id="left-footer-column" className="footer-column">
                    <div className="footer-column-title">HeLPfUl LiNKs</div>
                    <div className="footer-column-item"><Link to="/">Home</Link></div>
                    <div className="footer-column-item"><Link to="/account">Your Account</Link></div>
                    <div className="footer-column-item"><Link to="/cart">Your Cart</Link></div>
                    <div className="footer-column-item"><Link to="/contact">Contact Us</Link></div>
                </div>
                <div id="right-footer-column" className="footer-column">
                    <div className="footer-column-title">Support</div>
                    <div className="footer-column-item"><a href="mailto:support@company.com">support@company.com</a></div>
                    <div className="footer-column-item"><a href="tel:18000000000">1(800)-000-0000</a></div>
                </div>
                <div className="footer-column">
                    <div className="footer-column-title">Legal</div>
                    <div className="footer-column-item"><Link to="/terms">Terms Of Service</Link></div>
                    <div className="footer-column-item"><Link to="/privacy">Privacy Policy</Link></div>
                </div>
            </div>
            <div id="footer-copyright">WILLCO © 2020. all rights reserved.<br></br>web shop designed and developed by <a id="daniel-firpo" target="_blank" href="http://danielfirpo.com/">Daniel Firpo</a></div>
        </div>
    );
}

export default withRouter(Footer);