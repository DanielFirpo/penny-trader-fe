import React, { useState } from 'react';
import { setToast } from "../../../actions/actions"
import { connect } from "react-redux";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function Register(props) {

    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const history = useHistory();

    return (
        <div id="register" className="page-height page-padding">
            <h1 className="page-title">Register</h1>
            <form id="register-form" name="register" method="POST">
                <input type="text" name="username" placeholder="Username" className="register-form-input" id="register-form-username" onChange={(e) => { setUsername(e.target.value) }}></input>
                <input type="email" name="email" placeholder="Email" className="register-form-input" id="register-form-email" onChange={(e) => { setEmail(e.target.value) }}></input>
                <input type="password" name="password" placeholder="Password" className="register-form-input" id="register-form-password" onChange={(e) => { setPassword(e.target.value) }}></input>
                <input type="password" name="confirmpassword" placeholder="Confirm Password" className="register-form-input" id="register-form-confirm-password" onChange={(e) => { setConfirmedPassword(e.target.value) }}></input>
                {/* <div id={successId}><div id="success-text">Your message was sent successfully. Thanks!</div><div onClick={() => {setSuccessId("success-hidden")}} id="success-close"></div></div> */}
                <div className="row-display">
                    <p className="form-error">{error}</p>
                    <button type="submit" onClick={(e) => {
                        e.preventDefault();
                        if (password != confirmedPassword) {
                            setError("Passwords do not match.");
                            return;
                        }
                        console.log(`${process.env.REACT_APP_API_URL}register`)
                        axios.post(`${process.env.REACT_APP_API_URL}register`, { username: username, email: email, password: password })
                            .then(function (response) {
                                // console.log(response);
                                localStorage.setItem('token', response.data.token);
                                localStorage.setItem('administrator', response.data.administrator);
                                props.setToast("Account Created", "success")
                                history.push("/");
                            })
                            .catch(function (error) {
                                // console.log(error.response)
                                setError(error.response.data.message)
                            })
                    }} id="register-form-submit-button" className="button">Submit</button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(Register);