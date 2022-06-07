import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  CarbonBlogIcon,
  CloseNavIcon,
  DevHubLogo,
  LogoutIcon,
  OpenNavIcon,
  TaskListIcon,
  TechHuntIcon,
} from "../../../../DevHubIcons";
import { useDispatch, useSelector } from "react-redux";

import "./DashboardSideNavigation.css";
import { logoutInitiate } from "../../../../redux/actions/actions";

const DashboardSideNavigation = ({ customStyle, ...props }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [toggle, setToggle] = useState(false);
  const [hoverActive, setHoverActive] = useState(false);

  const [activeLocation, setActiveLocation] = useState("/");

  useEffect(() => {
    setActiveLocation(location.pathname);
  }, [location]);

  const handleLogout = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };
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

          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              visibility: toggle ? "visible" : "hidden",
            }}
          >
            <div
              onClick={handleLogout}
              style={{
                width: "100%",
                backgroundColor: "#008bb7",
                padding: "1.2rem 1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <p>Logout</p>
              <LogoutIcon />
            </div>
          </div>
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