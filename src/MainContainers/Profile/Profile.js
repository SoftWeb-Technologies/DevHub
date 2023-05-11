import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextInput, Title } from "../../components";
import { MenuIcon } from "../../DevHubIcons";
import { Button } from "../../components";
import { DashboardSideNavigation } from "../components";
import "./Profile.css";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <>
      <Title title="Profile" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <ProfileHeader isNavActive={isNavActive} currentUser={currentUser} />

      <div className="profile__main__container">
        <div className="">
          <div
            className="hide-on-desktop"
            style={{
              maxWidth: "22px",
              width: "100%",
              objectFit: "contain",
              cursor: "pointer",
              position: "absolute",
              top: "5%",
              left: "5%",
            }}
          >
            <MenuIcon />
          </div>{" "}
          <div className="profile__content__container">
            <h2 style={{ color: "gray" }}>
              {currentUser?.displayName ||
                currentUser?.user?.name ||
                currentUser?.email?.split("@")[0] ||
                "User"}
            </h2>
            <div className="profile__form__container">
              <TextInput
                placeholder={"Name"}
                inputType="text"
                value={
                  currentUser?.displayName ||
                  currentUser?.user?.name ||
                  currentUser?.email?.split("@")[0] ||
                  "User"
                }
              />
              <TextInput
                placeholder={"Email"}
                inputType="email"
                value={currentUser?.email || currentUser?.user?.email}
              />
              <a href="https://twitter.com/@Devhubhq">
              <Button
            customClassName={"pricing__button"}
            label="Follow us on Twitter"
            primary="true"
          />
          </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ProfileHeader = ({ isNavActive, currentUser }) => {
  return (
    <div className={`profile__header ${isNavActive} ? "active" : ""`}>
      <div className="profile__header__container"></div>
      <div className="profile__avatar__container profile_center">
        <h1>
          {currentUser?.displayName?.charAt(0) ||
            currentUser?.user?.name?.charAt(0) ||
            currentUser?.email?.charAt(0) ||
            "User"?.charAt(0)}
        </h1>
      </div>
    </div>
  );
};

export default Profile;
