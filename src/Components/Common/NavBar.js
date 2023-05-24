import React from "react";
import { Link } from "react-router-dom";
import "./Common.css";
import Logo from "../../images/Logo.jpg";

function NavBar() {
  return (
    <div className="navBar">
      <div className="logo-container">
        <img className="logos" src={Logo} alt="profile" />
        <span>Chat house</span>
      </div>
      <div style={{ display: "flex", columnGap: "20px" }}>
        <button className="nav-button">Home</button>
        <button className="nav-button">Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
