import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PaymentForm from "./PaymentForm";
import "../Services/CheckoutCard.css";


function CheckoutCard() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("items")));

  const [totalPrice, setTotalPrice] = useState([]);

 
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("items")));
  }, []);

  useEffect(() => {
    if (data) {
      const totalPrice = data.reduce((p, i) => p + i.price * i.quantity, 0);
      setTotalPrice(totalPrice);
    }
  }, [data]);


  return (
    <div>
      <Navbar />
      <div className="checkout-container">
        <div className="order-summary">
          <h2>Order Summary</h2>
          {data && (
            <div>
              {data.map((item) => (
                <div key={item.id}>
                  <ul>
                    {item.name}
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </ul>
                </div>
              ))}
            </div>
          )}
          <h2>Total: $ {totalPrice}</h2>
        </div>

        <div className="payment-container">
          <PaymentForm totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
