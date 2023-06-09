import React from "react";
import { Link } from "react-router-dom";
import "./Common.css";
import Logo from "../../images/Logo.jpg";
import { useHistory } from "react-router";

function NavBar() {
  const history= useHistory()
  return (
    <div className="navBar">
      <div className="logo-container">
        <img className="logos" src={Logo} alt="profile" />
        <span>Chat house</span>
      </div>
      <div style={{ display: "flex", columnGap: "20px" }}>
        <button className="nav-button" onClick={()=>history.push('/home')}>Home</button>
        <button className="nav-button" onClick={()=>history.push('/')}>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
