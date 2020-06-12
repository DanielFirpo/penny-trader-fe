import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { setToast } from "../actions/actions"

export const axiosWithAuth = () => {

    //const history = useHistory();

    const token = localStorage.getItem('token');
    console.log("token " + token);
    if (!token) {
        // setToast("")
        //history.push("/");
        // window.location.href = window.location.href.protocol + "//" + window.location.href.host + "/" + window.location.href.pathname.split('/')[1];
        console.log("token undefined");
    }

    return axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem("token")
        }
    });
};