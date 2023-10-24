import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/URLs";
import { Link } from "react-router-dom";

const Header = () => {
  const[btnName, setBtnName] = useState("login")
  useEffect(() => {
    console.log("header render")
  })
  function toggleBtn(){
    btnName === "login" ? setBtnName("logout"): setBtnName("login")
  }
    return (
      <div className="header">
        <div className="logoContainer">
          <img className="logo" src={LOGO_URL} alt="" />
        </div>
        <div className="navItems">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li>Cart</li>
            <button
              onClick={toggleBtn}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    );
  }

export default Header;