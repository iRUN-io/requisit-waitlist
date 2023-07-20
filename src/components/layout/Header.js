/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/style-prop-object */
import React from "react";
import Image from "../elements/Image";

const Header = () => {
  const toggleMenu = () => {
    document.getElementById("isToggle").classList.toggle("open");
    var isOpen = document.getElementById("navigation");
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  };

  return (
    <header
      id="topnav"
      className="defaultscroll sticky mx-auto"
      style={{ backgroundColor: "F6F8FB", float: "right" }}
    >
      <div className="container">
        <a className="logo" href="/">
          <Image
            src={require("../../assets/images/home/requisitLogo.png")}
            alt="Open"
            width="100"
            className="logo-light-mode"
          />
        </a>

        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <div id="navigation" className="mx-auto">
          <ul className="navigation-menu" style={{ float: 'right' }}>
            <li>

            </li>
            {/* <li>
              <a href="https://hrmaneja.com" className="sub-menu-item">
                Home
              </a>
            </li>

            <li>
              <a href="https://hrmaneja.com/#about" className="sb-menu-item">
                Features
              </a>
            </li> */}

            {/* <li>
              <a target='_blank' href="https://irunauto.com/contact" className="sb-menu-item">
                Contact Us
              </a>
            </li> */}
            <li>
            {/* <button style={{ borderRadius: "7px" }} className="btn btn-coming-soon">
            COMING SOON
            </button> */}
          </li>

            <li className="waitlist-header-btn">
              <button href="https://irunauto.com/contact" style={{ borderRadius: "7px", width: '200px', marginTop: '15px' }} className="btn btn-hrmaneja">
              Contact Us
              </button>
            </li>
          </ul>

        </div>
      </div>
    </header>
  );
};

export default Header;
