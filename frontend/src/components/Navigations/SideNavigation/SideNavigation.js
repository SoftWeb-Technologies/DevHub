import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { DevHubLogo, DevHubLogoLight } from "../../../constants/Images";
import {
  HomeIcon,
  AboutIcon,
  PricingIcon,
  ContactIcon,
} from "../../../DevHubIcons";
import "./SideNavigation.css";

const SideNavigation = ({ theme, customStyle }) => {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <>
      <div>
        {/* Side nav */}
        <div className="side__navbar" style={customStyle && customStyle}>
          <div>
            <Link to={"/"}>
              <div className="logo__container">
                <div className="logo">
                  <img
                    src={theme === "dark" ? DevHubLogo : DevHubLogoLight}
                    alt="devHub-logo"
                  />
                </div>

                <h1 className={`${theme === "dark" ? "dark" : "light"}`}>
                  DevHub
                </h1>
              </div>
            </Link>
          </div>
          <div className="menu__container">
            <NavMenu
              path={"/"}
              menuName="Home"
              Icon={HomeIcon}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
            <NavMenu
              path={"/about"}
              menuName="About"
              Icon={AboutIcon}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
            <NavMenu
              path={"/pricing"}
              menuName="Pricing"
              Icon={PricingIcon}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
            <NavMenu
              path={"/contact"}
              menuName="Contact"
              Icon={ContactIcon}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const NavMenu = ({ path, Icon, menuName, activeMenu, setActiveMenu }) => {
  console.log("=>> " + activeMenu);
  return (
    <NavLink
      activeClassName="navbar__link active"
      className="navbar__link"
      to={path}
    >
      <Icon />
      {menuName}
    </NavLink>
  );
};

export default SideNavigation;
