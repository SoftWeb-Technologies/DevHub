import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  HomeIcon,
  AboutIcon,
  PricingIcon,
  ContactIcon,
  DevHubLogo,
  CloseNavIcon,
  OpenNavIcon,
} from "../../../DevHubIcons";
import "./SideNavigation.css";

const SideNavigation = ({ customStyle, ...props }) => {
  const [toggle, setToggle] = useState(false);
  const [hoverActive, setHoverActive] = useState(false);

  return (
    <>
      <div
        className={`side__navbar ${toggle ? "active" : "deactive"}`}
        style={customStyle && customStyle}
      >
        <div className="nav__header">
          <div className="logo__container">
            <div>
              <div className="main__logo__container">
                <div
                  className="devHub__logo"
                  onMouseOver={() => {
                    !toggle && setHoverActive(true);
                  }}
                  onMouseLeave={() => setHoverActive(false)}
                >
                  {hoverActive ? (
                    <>
                      <OpenNavIcon
                        onClick={() => {
                          setToggle(true);
                          props.setIsNavActive(true);
                        }}
                      />
                      <span className="open__nav">Open navigation</span>
                    </>
                  ) : (
                    <DevHubLogo fillColor={"#008bb7"} />
                  )}
                </div>
                <h1 className="logo__name">DevHub</h1>
              </div>
            </div>
          </div>

          <div className="toggle__btn__container">
            {toggle && !hoverActive && (
              <div
                className="close__nav"
                onClick={() => {
                  setToggle(false);
                  props.setIsNavActive(false);
                }}
              >
                <CloseNavIcon />
                <span className="show__title">hide navigation</span>
              </div>
            )}
          </div>
        </div>
        <div className="menu__container">
          <NavMenu toggle={toggle} path={"/"} menuName="Home" Icon={HomeIcon} />
          <NavMenu
            toggle={toggle}
            path={"/about"}
            menuName="About"
            Icon={AboutIcon}
          />
          <NavMenu
            toggle={toggle}
            path={"/pricing"}
            menuName="Pricing"
            Icon={PricingIcon}
          />
          <NavMenu
            toggle={toggle}
            path={"/contact"}
            menuName="Contact"
            Icon={ContactIcon}
          />
        </div>
      </div>
    </>
  );
};

const NavMenu = ({ path, Icon, menuName, toggle }) => {
  return (
    <NavLink
      activeClassName="navbar__link active"
      className="navbar__link"
      to={path}
    >
      <Icon />
      {toggle && menuName}
    </NavLink>
  );
};

export default SideNavigation;
