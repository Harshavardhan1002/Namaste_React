import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/URLs";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const[btnName, setBtnName] = useState("login")

  const {loggedInUser} = useContext(UserContext);

  useEffect(() => {
  })
  function toggleBtn(){
    btnName === "login" ? setBtnName("logout"): setBtnName("login")
  }
  
    return (
      <div className="bg-orange-200 flex justify-between shadow-lg rounded-lg m-2 p-2" >
        <div className="logoContainer">
          <img className="logo" src={LOGO_URL} alt="" />
        </div>
        <div className="navItems px-1 mx-1">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/grocery"}>Grocery</Link></li>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li>Cart</li>
            <li>User Name: {loggedInUser}</li>
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