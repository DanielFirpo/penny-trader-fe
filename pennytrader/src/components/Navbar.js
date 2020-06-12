import React, { useState, forceUpdate, useEffect } from 'react';

import { Link } from "react-router-dom";
import { withRouter, useHistory } from 'react-router-dom'

function Navbar() {

    const [forceUpdate, setForceUpdate] = useState(false);

    const history = useHistory();

    return (
        <div id="navbar">
            <div id="navbar-title">
                <Link to="/">Penny Trader</Link>
            </div>
            <div className="navbar-link">
                <Link to="/cart">Cart</Link>
            </div>
            {
                localStorage.getItem("administrator") == "true" && localStorage.getItem("token") ?
                    <div className="navbar-link">
                        <Link to="/admindashboard">Admin Dashboard</Link>
                    </div>
                    :
                    <></>
            }
            {
                !localStorage.getItem("token") ?
                    <>
                        <div className="navbar-link">
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="navbar-link">
                            <Link to="/register">Sign Up</Link>
                        </div>
                    </>
                    :
                    <div className="navbar-link" onClick={(e) => { localStorage.removeItem("token"); localStorage.removeItem("administrator"); history.push("/"); setForceUpdate(!forceUpdate);}}>
                    Logout
                    </div>
            }
        </div>
    );
}

export default withRouter(Navbar);