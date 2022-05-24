import React from "react";
import { Link } from "react-router-dom";
import { DevHubLogo, DevHubLogoLight } from "../../constants/Images";
import "./Header.css";

const Header = ({ children, theme }) => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <div className="logo__container">
            <div className="logo">
              <img
                src={theme === "dark" ? DevHubLogo : DevHubLogoLight}
                alt="devHub-logo"
              />
            </div>

            <h1 className={`${theme === "dark" ? "dark" : "light"}`}>DevHub</h1>
          </div>
        </Link>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Header;
