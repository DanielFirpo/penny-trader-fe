import React, { useState, useEffect } from 'react';
import qs from "qs";
import { axiosWithAuth } from "../../../auth/AxiosWithAuth"

function ShippingLabel(props) {

    const [order, setOrder] = useState();

    useEffect(() => {
        axiosWithAuth().get(`${process.env.REACT_APP_API_URL}admin/order?id=${qs.parse(props.location.search, { ignoreQueryPrefix: true }).id}`)
            .then(res => {
                console.log(res.data)
                setOrder(res.data.order);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return (
        <div id="shippinglabel" className="page-height page-padding">
            <h1 className="page-title">Print Shipping Label</h1>
            {
                order ?
                    <div>
                        Idk what this should look like yet
                    </div>
                    :
                    <p>Loading...</p>
            }
        </div>
    );
}

export default ShippingLabel;