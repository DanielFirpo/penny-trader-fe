import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment() {

    // async function handleToken(token, addresses) {
    //     const response = await axios.post(
    //         "https://ry7v05l6on.sse.codesandbox.io/checkout",
    //         { token, product }
    //     );
    //     const { status } = response.data;
    //     console.log("Response:", response.data);
    //     if (status === "success") {
    //         alert("Success! Check email for details");
    //     } else {
    //         alert("Something went wrong");
    //     }
    // }

    return (
        <div className="checkout-container">
            {/* <StripeCheckout
                stripeKey="pk_test_31m0V6ToSbKBTcKqy1HDbVP300d3oxrit0"
                token={handleToken}
                amount={5000 * 100}
                name="Tesla Roadster"
                billingAddress
                shippingAddress
            /> */}
        </div>
    );

};

export default Payment