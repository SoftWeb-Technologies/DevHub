import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../components";
import { TextInput, Title } from "../../components";
import {thinkingImg} from "../../constants/Images";
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
      <ProfileHeader
      isNavActive={isNavActive}
      displayName={
        currentUser?.displayName ||
        currentUser?.user?.name ||
        currentUser.email ||
        "User"
      }
      />

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
                  currentUser?.email?.charAt(0) ||
                  "User"?.charAt(0)}
              </h1>
            </div>
            <h2 style={{ color: "gray", marginBottom: "1rem", marginRight: "5%" }}>
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
            </div>
            <div className="user-profile-inner"/>
            <div className="user-profile-inner1">
             <div className="image_wrapper">
              <img className="thinking_image" alt="" src={thinkingImg} />
             </div>
             </div>
            <div className="Facts__container">Do you know?</div>
            <div className="Facts__wrapper">
              <div className="coding__fact">Coding will soon be as important as "reading"!</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ProfileHeader = ({ isNavActive, displayName }) => {
  return (
    <div className={`profile__header ${isNavActive} ? "active" : ""`}>
      <div className="profile__header__container">
        <Header displayName={displayName} />
      </div>
      <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1rem",
      }}
      >
        <h2
        style={{
          fontSize: "1.2rem",
          color: "#fff",
        }}
        >
          Your Profile
        </h2>
        <h2
        className="hide-on-mobile"
        style={{
          fontSize: "1.2rem",
          color: "#fff",
        }}
        >
          What's up? {" "}
          <span
          style={{
            color: "#0E80D3",
          }}
          >
            {displayName}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Profile;
