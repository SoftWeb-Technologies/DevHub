import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  CarbonBlogIcon,
  CloseNavIcon,
  DevHubLogo,
  OpenNavIcon,
  TaskListIcon,
  TechHuntIcon,
} from "../../../../DevHubIcons";

import "./DashboardSideNavigation.css";

const DashboardSideNavigation = ({ customStyle, ...props }) => {
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
            path={"/blogspace"}
            menuName="Blog Space"
            Icon={CarbonBlogIcon}
            location={activeLocation}
            setLocation={setActiveLocation}
          />
          <NavMenu
            toggle={toggle}
            path={"/tasklist"}
            menuName="Task List"
            Icon={TaskListIcon}
            location={activeLocation}
            setLocation={setActiveLocation}
          />
          <NavMenu
            toggle={toggle}
            path={"/techhunt"}
            menuName="Tech Hunt"
            Icon={TechHuntIcon}
            location={activeLocation}
            setLocation={setActiveLocation}
          />
          <NavMenu
            toggle={toggle}
            path={"/contest"}
            menuName="Contest"
            Icon={TechHuntIcon}
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

export default DashboardSideNavigation;
