import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Services/Order.css";


function OrderMenu() {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const orderItems = JSON.parse(localStorage.getItem("items")) || [];

    setOrderItems(orderItems);
  }, []);

  const removeOrder = (id) => {
   const updatesItems = orderItems.filter((item) => item.id !== id);
   setOrderItems(updatesItems);
   localStorage.setItem("items", JSON.stringify(updatesItems));
  }

  return (
    <div>
      <Navbar />
      <div className="order-card">
        {orderItems.map((item) => (
          <div key={item.id}>
            <button onClick={() => removeOrder(item.id)}>X</button>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))}
      </div>

      <div>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default OrderMenu;
