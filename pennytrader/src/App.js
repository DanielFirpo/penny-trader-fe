import React from 'react';
import './App.css';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { withRouter } from 'react-router-dom'
import { Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";

import StripeCheckout from "react-stripe-checkout";

import Navbar from "./components/Navbar"
import Homepage from "./components/pages/User/Homepage"
import Register from "./components/pages/User/Register"
import Login from "./components/pages/User/Login"
import Dashboard from "./components/pages/Admin/Dashboard"
import AddProduct from "./components/pages/Admin/AddProduct"
import EditProduct from "./components/pages/Admin/EditProduct"
import Orders from "./components/pages/Admin/Orders"
import {default as AdminOrder} from "./components/pages/Admin/Order";
import Products from "./components/pages/Admin/Products"
import StoreSettings from "./components/pages/Admin/StoreSettings"

import Cart from "./components/pages/User/Cart"
import Toast from "./components/Toast"
import CheckoutSuccess from './components/pages/User/CheckoutSuccess';
import CheckoutFailure from './components/pages/User/CheckoutFailure';
import Checkout from "./components/pages/User/Checkout";
import ShippingLabel from './components/pages/Admin/ShippingLabel';
import Footer from './components/Footer';
import Contact from "./components/pages/User/Contact"
import Account from "./components/pages/User/Account"
import ViewImage from "./components/ViewImage"
import Order from "./components/pages/User/Order"
import PrivacyPolicy from './components/pages/User/PrivacyPolicy';
import TermsOfService from './components/pages/User/TermsOfService';
import VerifyEmail from './components/pages/User/VerifyEmail';
import VerifyPrompt from "./components/pages/User/VerifyPrompt"

// const stripePromise = loadStripe('TODO: Aquire public stripe key');


function App() {

  return (
    <div>
      <Toast />
      <ViewImage />
      {/* <Navbar /> */}
      {/* <Route path="/" component={Navbar}/> */}
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route path="/register/" component={Register} />
      <Route path="/login/" component={Login} />
      <Route path="/verifyprompt/" component={VerifyPrompt} />
      <Route path="/verify/" component={VerifyEmail} />
      <Route path="/cart/" component={Cart} />
      <Route path="/checkout/" component={Checkout} />
      <Route path="/contact/" component={Contact} />
      <Route path="/privacy/" component={PrivacyPolicy} />
      <Route path="/terms/" component={TermsOfService} />
      <PrivateRoute path="/account/" component={Account} />
      <PrivateRoute path="/order/" component={Order} />

      <Route path="/checkoutsuccess" component={CheckoutSuccess} />
      <Route path="/checkoutfailure/" component={CheckoutFailure} />

      <PrivateRoute exact path="/admin/" component={Dashboard} />
      <PrivateRoute path="/admin/addproduct/" component={AddProduct} />
      <Route
        path="/admin/editproduct/"
        render={(props) => <EditProduct {...props} isAuthed={true} />}
      />
      <PrivateRoute path="/admin/viewproducts/" component={Products} />
      <PrivateRoute path="/admin/vieworders/" component={Orders} />
      <PrivateRoute path="/admin/order/" component={AdminOrder} />
      <PrivateRoute path="/admin/shippinglabel/" component={ShippingLabel} />
      <PrivateRoute path="/admin/storesettings/" component={StoreSettings}/>
      {/* <Route path="/" component={Footer}/> */}
      <Footer />
    </div>
  );
}

export default withRouter(App);
