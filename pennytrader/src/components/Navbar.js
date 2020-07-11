import React, { useState, forceUpdate, useEffect } from 'react';

import { Link } from "react-router-dom";
import { withRouter, useHistory } from 'react-router-dom'

import logo from "../images/logo.png"
import account from "../images/account.svg"
import cart from "../images/cart.svg"

let lastPage = "";

function Navbar() {

    const [forceUpdate, setForceUpdate] = useState(false);

    const [navClass, setNavClass] = useState("open");

    let navRef = React.createRef();

    useEffect(() => {
        window.addEventListener('wheel', updateNavbarState)
    }, [])

    const [time, setTime] = useState(Date.now());

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(Date.now())
            
            if(window.location.href != lastPage) {

                setNavClass("open");

            }
        
            lastPage = window.location.href;
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    const history = useHistory();

    return (
        <div>
            <div id="navbar-padding"></div>
            <div ref={navRef} id="navbar" className={"navbar-" + navClass}>
                <div className="navbar-contents">

                    <div id="navbar-title">
                        <Link to="/"><img id="navbar-logo" src={logo}></img></Link>
                    </div>

                    {
                        localStorage.getItem("administrator") == "true" && localStorage.getItem("token") ?
                            <div className="navbar-link" onClick={() => {
                                window.location = "/admin/"
                            }}>
                                ADMIN DASHBOARD
                                {/* can't use link cause of a weird bug =/ */}
                                {/* <Link to="admin/">ADMIN DASHBOARD</Link> */}
                            </div>
                            :
                            <></>
                    }
                    {
                        !localStorage.getItem("token") ?
                            <>
                                <div className="navbar-link">
                                    <Link to="/login">LOGIN</Link>
                                </div>
                                <div className="navbar-link">
                                    <Link to="/register">SIGN UP</Link>
                                </div>
                            </>
                            :
                            <>
                                <div className="navbar-link" onClick={(e) => { localStorage.removeItem("token"); localStorage.removeItem("administrator"); history.push("/"); setForceUpdate(!forceUpdate); }}>
                                    LOGOUT
                                </div>
                            </>
                    }
                    <div className="navbar-link">
                        <Link to="/contact">CONTACT</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to="/cart">LINK</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to="/cart">LINK</Link>
                    </div>
                    <div className="navbar-link">
                        <Link to="/cart">LINK</Link>
                    </div>

                    <div id="navbar-link-end" />
                    {
                        localStorage.getItem("token") ?
                            <div id="account-container" className="navbar-link">
                                <Link title="View your account" to="/account">
                                    <img className="navbar-image" src={account}></img>
                                </Link>
                            </div>
                            :
                            <div id="account-container" className="navbar-link">
                                <Link title="Login to your account" to="/login">
                                    <img className="navbar-image" src={account}></img>
                                </Link>
                            </div>
                    }
                    <div className="navbar-div" />
                    <div className="navbar-link">
                        <Link id="cart-container" title="View your cart" to="/cart">
                            <span>{localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0}</span>
                            <img className="navbar-image" src={cart}></img>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

    function updateNavbarState(e) {

        if (window.scrollY > 0) {
            if (e.deltaY < 0) {
                setNavClass("open")
            }
            else {
                setNavClass("closed")
            }
        }

    }

}

export default withRouter(Navbar);