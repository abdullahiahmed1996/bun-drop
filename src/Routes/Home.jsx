import React from "react";
import Navbar from "../Components/Navbar";
import "../Services/Home.css";
import { Link } from "react-router-dom";
import Burger from "../Images/Burger_HomePage.png";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="text-container">
          <h1>
            The Fastest Delivery in Your City
          </h1>
          <Link to={"/menu"}>
            <button className="btn-order">Order Now</button>
          </Link>
        </div>
        <div>
          <img src={Burger} alt="Burger" className="burger-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
