import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DevHubLogo, DevHubLogoLight } from "../../../constants/Images";
import "./Navbar.css";

const Navbar = ({ theme, children, show }) => {
  return (
    <div className="header">
      <div className="header__navbar">
        <Link to={"/"}>
          <div className={"logo__container " + show}>
            <div className="logo">
              <img
                src={theme === "dark" ? DevHubLogo : DevHubLogoLight}
                alt="devHub-logo"
              />
            </div>

            <h1 className={`${theme === "dark" ? "dark" : "light"}`}>DevHub</h1>
          </div>
        </Link>

        <NavbarSlider theme={theme} />
        <div className="header__children">{children}</div>
      </div>
    </div>
  );
};

const NavbarSlider = ({ theme }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="slider__main__container">
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div
          style={{
            transform: open ? "translateY(7px) rotate(45deg) " : "rotate(0deg)",
          }}
          className={theme === "light" ? "line light" : "line"}
        />
        <div
          style={{
            opacity: open ? "0" : "1",
          }}
          className={theme === "light" ? "line light" : "line"}
        />
        <div
          style={{
            transform: open
              ? " translateY(-7px) rotate(-45deg)"
              : "rotate(0deg)",
          }}
          className={theme === "light" ? "line light" : "line"}
        />
      </div>

      <div className={`${open ? "slider active" : "slider"}`}>
        <ul onClick={() => setOpen(false)} className="slider__list">
          <li className="nav__logo__container">
            <Link to="/">
              <div
                className="logo"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div>
                  <img
                    src={DevHubLogo}
                    alt="devHub-logo"
                    style={{
                      width: "60px",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    color: "#008bb7",
                  }}
                >
                  DevHub
                </h3>
              </div>
            </Link>
          </li>
          <div
            style={{
              minWidth: "100%",
            }}
          >
            <Link to="/">
              <li className="menuItem">
                <p>Home</p>
              </li>
            </Link>
            <Link to="/about">
              <li className="menuItem">
                <p>about</p>
              </li>
            </Link>
            <Link to="/features">
              <li className="menuItem">
                <p>Features</p>
              </li>
            </Link>
            <Link to="/contact">
              <li className="menuItem">
                <p>Contact</p>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
