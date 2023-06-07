import React, { useEffect, useState } from "react";
import MenuCard from "../Components/MenuCard";
import "../Services/MenuItems.css";

function MenuItems() {
  const [menu, setMenu] = useState([]);
  const [displayOrderModal, setDisplayOrderModal] = useState(false);
  const [orderItem, setOrderItem] = useState({});

  useEffect(() => {
    fetch("http://localhost:7000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function toggleOrderModal(e, id) {
    if (e.target && e.target.classList.contains("order-modal")) {
      setDisplayOrderModal(!displayOrderModal);
    } else if (e.target && e.target.classList.contains("btn-order")) {
      const item = menu.find((i) => i.id === id);

      if (item) {
        setOrderItem(item);
      }

      setDisplayOrderModal(!displayOrderModal);
    }
  }

  function addLocalStorage(id) {
    const menuItem = menu.find((item) => item.id === id);
    let cart = JSON.parse(localStorage.getItem("items")) || [];

    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      let newItem = {
        id: menuItem.id,
        name: menuItem.name,
        price: menuItem.price,
        quantity: 1,
      };
      cart.push(newItem);
    }

    localStorage.setItem("items", JSON.stringify(cart));
  }

  return (
    <div>
      <h1>Menu</h1>
      {displayOrderModal ? (
        <div className="order-modal" onClick={toggleOrderModal}>
          <div className="order-modal-content">
            <h3>{`You added "${orderItem.name}" to your order!`}</h3>
            <h4>Price: $ {orderItem.price}</h4>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="items">
        {menu.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            addLocalStorge={addLocalStorage}
            image={item.image}
            toggleOrderModal={toggleOrderModal}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuItems;
