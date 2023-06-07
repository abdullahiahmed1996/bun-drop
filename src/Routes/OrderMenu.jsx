import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../Services/Order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


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
   alert("Item removed from order!");
  }



  return (
    <div>
      <Navbar />
      <h1>Orders</h1>
      {orderItems.length === 0 ? (
        <div className="empty-cart">
          <h2>You have no orders.</h2>
          <h2>Please choose some of our items avalible.</h2>
          <Link to={"/menu"}>
            <button className="btn-menu">Go to menu</button>
          </Link>
        </div>
      ) : (
        <div className="order-card">
          {orderItems.map((item) => (
            <div className="item-card" key={item.id}>
              <button
                className="btn-remove"
                onClick={() => removeOrder(item.id)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
              <h2>{item.name}</h2>
              <p>Price: $ {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}

      {orderItems.length > 0 && (
        <div>
          <Link to={"/checkout"}>
            <button className="btn-checkout">Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default OrderMenu;
