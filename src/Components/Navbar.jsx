import React from "react";
import { Link } from "react-router-dom";
import "../Services/Navbar.css";
import blacklogo from "../Images/logo black.png";

function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to={"/"}>
            <div>
              <img
                style={{ height: "40px", marginRight: "2px" }}
                src={blacklogo}
                alt="Bun Drop Logo"
              />
              <h1 className="title">Bun Drop</h1>
            </div>
          </Link>
        </div>

        <div>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/ordermenu"}>Order</Link>
          <Link to={"/checkout"}>Checkout</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
