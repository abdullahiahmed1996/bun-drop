import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Services/ConfirmCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function ConfirmCard() {
  const [randomNum, setRandomNum] = useState(null);
  const navigate = useNavigate();

  const generateRandomNum = () => {
    const min = 15;
    const max = 45;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNum(randomNum);
  };

  useEffect(() => {
    generateRandomNum();
  }, []);

  function handleClick() {
    localStorage.removeItem("items");

    navigate("/");
  };

  return (
    <div className="confirm-container">
      <div className="item-container">
        <h1>Order has been placed !</h1>
        <p>You're food is on it's way</p>
        <p>Estimated for delivery is {randomNum} mins</p>
      </div>
      <button onClick={handleClick} className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to home
      </button>
    </div>
  );
}

export default ConfirmCard;
