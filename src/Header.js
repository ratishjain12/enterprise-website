import React, { useState, useEffect } from "react";
import logo from "./images/logo.png";
import "@mui/material";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Container } from "@mui/system";
import { IconButton } from "@mui/material";
import Sidebar from "./Sidebar";

function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleHandle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div>
      <Container>
        <div className="head">
          <div>
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="links">
            <p>Overview</p>
            <p>Pages</p>
            <p>Template</p>
          </div>
          <div>
            <button className="btn">Contact us</button>
          </div>
          <div className="icon-button">
            <IconButton onClick={toggleHandle}>
              {toggle ? <FaTimes /> : <FaBars />}
            </IconButton>
          </div>
        </div>
      </Container>
      {toggle && <Sidebar />}
    </div>
  );
}

export default Header;
