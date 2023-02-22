import React from "react";
import "./Navbar.css";
import mylogo from "../assets/mylogo.png";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className={props.darkMode ? "darkHeader" : "header"}>
      <div className="nav">
        <Link to="/">
          <img className="logo" src={mylogo} alt="" />
        </Link>
        <div className={props.darkMode ? "navigationDark" : "navigation"}>
          <Link to="/">
            {" "}
            <h2>Home</h2>
          </Link>
          <Link to="/about">
            {" "}
            <h2>About</h2>
          </Link>
          <h2>
            <MdDarkMode onClick={props.toggleDarkMode} />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
