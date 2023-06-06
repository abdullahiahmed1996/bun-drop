import React, { useEffect, useState } from "react";

function ConfirmCard() {
  const [randomNum, setRandomNum] = useState(null);

  const generateRandomNum = () => {
    const min = 15;
    const max = 45;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNum(randomNum);
  };

  useEffect(() => {
    generateRandomNum();
  }, []);

  function emptyLocalStorage() {
    localStorage.removeItem("items");
  }

  return (
    <div>
      <div>
        <h1>Order has been placed</h1>
        <p>You're food is on it's way</p>
        <p>Estimated for delivery is {randomNum} mins</p>
      </div>
      <button onClick={emptyLocalStorage}>X</button>
    </div>
  );
}

export default ConfirmCard;
