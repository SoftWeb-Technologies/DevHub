import React from "react";
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

        <div className="header__children">{children}</div>
      </div>
    </div>
  );
};

export default Navbar;
