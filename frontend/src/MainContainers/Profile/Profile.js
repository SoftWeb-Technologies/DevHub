import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextInput, Title } from "../../components";
import { MenuIcon } from "../../DevHubIcons";
import { DashboardSideNavigation } from "../components";
import "./Profile.css";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <>
      <Title title="Profile" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
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
          <h2 style={{ textAlign: "center", padding: "2rem 0" }}>
            Edit Profile
          </h2>
          <div className="profile__content__container">
            <div className="profile__avatar__container">
              <h1>
                {currentUser?.displayName?.charAt(0) ||
                  currentUser?.user?.name?.charAt(0) ||
                  "User"?.charAt(0)}
              </h1>
            </div>
            <h2 style={{ color: "gray", marginBottom: "1rem" }}>
              {currentUser?.displayName || currentUser?.user?.name || "User"}
            </h2>

            <div className="profile__form__container">
              <TextInput
                placeholder={"Name"}
                inputType="text"
                value={
                  currentUser?.displayName || currentUser?.user?.name || "User"
                }
              />
              <TextInput
                placeholder={"Email"}
                inputType="email"
                value={currentUser?.email || currentUser?.user?.email}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
