import React, { useState } from "react";
import Button from "../atom/Button";
import { NavLink } from "react-router-dom";
import "./Components.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [open, setOpen] = useState(false);
  const hanleHamClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="logo-container">
        <img
          src="images/Smartcheck Logo White@0.75x.svg"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav">
        <div className="ham" onClick={hanleHamClick}>
          {open ? <RiCloseLine size={40} /> : <GiHamburgerMenu size={30} />}
        </div>
        <ul className={open ? "nav-link" : "nav-link hiden"}>
          <li>
            <NavLink
              style={{ height: 20, padding: "15px 0" }}
              to="/"
              exact
              activeClassName="active-tab"
            >
              <span>
                <img src="images/noun_Home_2079957.svg" alt="Home" /> Home
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              classname="nav-btn"
              to="server"
              activeClassName="active-tab"
            >
              <span>
                <img src="images/Group 42581.svg" alt="Server" /> Server
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ height: 20, padding: "15px 0" }}
              to="application"
              activeClassName="active-tab"
            >
              <span>
                <img
                  src="images/noun_application_967926.svg"
                  alt="Application"
                />
                Application
              </span>
            </NavLink>
          </li>
        </ul>
        <Button title="Check Health Status" classname="nav-btn" />
      </div>
    </>
  );
};

export default Header;
