import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { setToast } from "../actions/actions"

export const axiosWithAuth = () => {

    //const history = useHistory();

    const token = localStorage.getItem('token');

    if (token === "undefined") {
        // setToast("")
        //history.push("/");
    }

    return axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem("token")
        }
    });
};