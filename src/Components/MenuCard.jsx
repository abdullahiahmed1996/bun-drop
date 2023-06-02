import React from "react";
import "../Services/ItemCard.css";

function MenuCard({
  id,
  name,
  description,
  image,
  price,
  category,
  addLocalStorge,
}) {

  const handleOrderClick = () => {
    addLocalStorge(id);
    window.alert(`Added ${name} to order !`);
  };

  return (
    <div className="card-container">
      <div>
        <img className="item-image" src={`/Images/${image}`} alt="NotFound" />
        <h3 className="item-name">{name}</h3>
        <h3 className="item-description">{description}</h3>
        <h3 className="item-category">{category}</h3>
        <h3 className="item-price">${price}</h3>

        <button
          className="btn-order"
          onClick= {handleOrderClick}
        >
          Order
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
