import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

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
  const location = useLocation();

  const [toggle, setToggle] = useState(false);
  const [hoverActive, setHoverActive] = useState(false);

  const [activeLocation, setActiveLocation] = useState("/");

  useEffect(() => {
    setActiveLocation(location.pathname);
  }, [location]);

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
          <NavMenu
            toggle={toggle}
            path={"/"}
            menuName="Home"
            Icon={HomeIcon}
            location={activeLocation}
            setLocation={setActiveLocation}
          />
          <NavMenu
            toggle={toggle}
            path={"/about"}
            menuName="About"
            Icon={AboutIcon}
            location={activeLocation}
            setLocation={setActiveLocation}
          />
          <NavMenu
            toggle={toggle}
            path={"/pricing"}
            menuName="Pricing"
            Icon={PricingIcon}
            location={activeLocation}
            setLocation={setActiveLocation}
          />
          <NavMenu
            toggle={toggle}
            path={"/contact"}
            menuName="Contact"
            Icon={ContactIcon}
            location={activeLocation}
            setLocation={setActiveLocation}
          />
        </div>
      </div>
    </>
  );
};

const NavMenu = ({ path, Icon, menuName, toggle, location, setLocation }) => {
  return (
    <NavLink
      className={
        location.pathname === path ? "navbar__link active" : "navbar__link"
      }
      to={path}
      onClick={() => {
        setLocation(path);
      }}
    >
      <Icon />
      {toggle && menuName}
    </NavLink>
  );
};

export default SideNavigation;
