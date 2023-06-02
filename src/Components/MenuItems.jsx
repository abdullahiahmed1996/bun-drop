import React, { useEffect, useState } from "react";
import MenuCard from "../Components/MenuCard";
import "../Services/MenuItems.css";

function MenuItems() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
          />
        ))}
      </div>
    </div>
  );
}

export default MenuItems;
