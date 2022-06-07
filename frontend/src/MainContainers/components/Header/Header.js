import React from "react";
import { MenuIcon, SearchIcon } from "../../../DevHubIcons";
import "./Header.css";

const Header = ({ displayName }) => {
  const firstLetter = displayName.charAt(0);
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "10px",
        }}
      >
        <div
          style={{
            maxWidth: "22px",
            width: "100%",
            objectFit: "contain",
            cursor: "pointer",
          }}
        >
          <MenuIcon />
        </div>{" "}
        <p
          style={{
            color: "#000",
            textTransform: "uppercase",
            fontWeight: "500",
            marginBottom: "0.2rem",
          }}
        >
          Menu
        </p>
      </div>

      <div className="dashboard__header__container__search">
        <input type={"text"} placeholder="Search a keyword" />
        <SearchIcon />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "40px",
          width: "100%",
          height: "40px",
          backgroundColor: "#fff",
          borderRadius: "100%",
          border: "2.5px solid #008bb7",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            color: "#008bb7",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          {firstLetter}
        </p>
      </div>
    </>
  );
};

export default Header;