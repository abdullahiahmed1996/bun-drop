import React from "react";
import Navbar from "./Navbar";
import "../Services/Checkout.css";

function Checkout() {
  return (
    <div>
      <Navbar />
      <div className="checkout-container">
        <div className="order-summery">

        </div>

        <div className="payment-container">
          <div>
            <h2>Basic Info</h2>
            <input placeholder="Frist name" />
            <input placeholder="Last name" />
            <input placeholder="Email" />
          </div>
          <div>
            <h2>Billing Address</h2>
            <input placeholder="Adress" />
            <input placeholder="City" />
            <input placeholder="Zip code" />
          </div>
          <div>
            <h2>Payment info</h2>
            <input placeholder="Card number"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
