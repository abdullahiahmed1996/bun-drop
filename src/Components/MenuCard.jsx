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
  toggleOrderModal,
}) {
  const handleOrderClick = (e) => {
    addLocalStorge(id);
    toggleOrderModal(e, id);
  };

  return (
    <div className="card-container">
      <div>
        <img className="item-image" src={`/Images/${image}`} alt= {name} />
        <h3 className="item-name">{name}</h3>
        <h3 className="item-description">{description}</h3>
        <h3 className="item-category">{category}</h3>
        <h3 className="item-price">${price}</h3>

        <button className="btn-order" onClick={(e) => handleOrderClick(e)}>
          Order
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
