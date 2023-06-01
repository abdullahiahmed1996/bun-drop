import React from "react";
import "../Services/ItemCard.css";

function MenuCard({ id, name, description, price, category, addLocalStorge }) {
  return (
    <div className="card-container">
      <div>
        <h3 className="item-name">{name}</h3>
        <h3 className="item-description">{description}</h3>
        <h3 className="item-category">{category}</h3>
        <h3 className="item-price">${price}</h3>

        <button
          className="btn-addToCart"
          onClick={() => {
            addLocalStorge(id);
          }}
        >
          Order
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
