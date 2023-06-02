import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Services/CheckoutCard.css"


function CheckoutCard() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("items")));

  const [totalPrice, setTotalPrice] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("items")));
  }, []);

  useEffect(() => {
    const totalPrice = data.reduce((p, i) => p + i.price * i.quantity, 0);
    setTotalPrice(totalPrice);
  }, [data]);

  return (
    <div>
      <Navbar />
      <div className="checkout-container">
        <div className="order-summary">
          <h2>Order Summary</h2>
          {data && (
            <h3>
              {data.map((item) => (
                <h3 key={item.id}>
                  {item.name}
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </h3>
              ))}
            </h3>
          )}
          <h2>Total: $ {totalPrice}</h2>
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
            {/* <h2>Payment info</h2>
            <input placeholder="Card number"></input> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
