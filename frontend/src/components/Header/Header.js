import React from "react";
import { DevHubLogoLight } from "../../constants/Images";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <>
      <div className="header">
        <div className="logo__container">
          <div className="logo">
            <img src={DevHubLogoLight} alt="devHub-logo" />
          </div>
          <h1>DevHub</h1>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Header;
