import React from 'react';
import './App.css';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { withRouter } from 'react-router-dom'
import { Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";

import StripeCheckout from "react-stripe-checkout";

import Payment from "./components/Payment"

import Navbar from "./components/Navbar"
import Homepage from "./components/pages/User/Homepage"
import Register from "./components/pages/User/Register"
import Login from "./components/pages/User/Login"
import Dashboard from "./components/pages/Admin/Dashboard"
import AddProduct from "./components/pages/Admin/AddProduct"
import EditProduct from "./components/pages/Admin/EditProduct"
import Orders from "./components/pages/Admin/Orders"
import Order from "./components/pages/Admin/Order"
import Products from "./components/pages/Admin/Products"
import Cart from "./components/pages/User/Cart"
import Toast from "./components/Toast"
import CheckoutSuccess from './components/pages/User/CheckoutSuccess';
import CheckoutFailure from './components/pages/User/CheckoutFailure';

// const stripePromise = loadStripe('TODO: Aquire public stripe key');


function App() {
  return (
    <div>
      <Toast />
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route path="/register/" component={Register} />
      <Route path="/login/" component={Login} />
      <Route path="/cart/" component={Cart} />

      <Route path="/checkoutsuccess" component={CheckoutSuccess} />
      <Route path="/checkoutfailure/" component={CheckoutFailure} />

      <PrivateRoute path="/admindashboard/" component={Dashboard} />
      <PrivateRoute path="/addproduct/" component={AddProduct} />
      <Route 
      path="/editproduct/"
      render={(props) => <EditProduct {...props} isAuthed={true} />}
      />
      <PrivateRoute path="/viewproducts/" component={Products} />
      <PrivateRoute path="/vieworders/" component={Orders} />
      <PrivateRoute path="/order/" component={Order} />
      {/* footer */}
    </div>
  );
}

export default withRouter(App);
