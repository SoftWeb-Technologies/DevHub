import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon, SearchIcon } from "../../../DevHubIcons";
import "./Header.css";

const Header = ({ displayName, setFilter }) => {
  const navigate = useNavigate();
  const firstLetter = displayName?.charAt(0);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="header__container">
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
        {/* <p
          style={{
            color: "#000",
            textTransform: "uppercase",
            fontWeight: "500",
            marginBottom: "0.2rem",
          }}
        >
          Menu
        </p> */}
      </div>

      <div className="dashboard__header__container__search">
        <input
          type={"text"}
          placeholder="Search a keyword"
          name="search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            // if (searchValue.length > 0 && searchValue !== "") {
            //   setFilter && setFilter(e.target.value);
            // }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && searchValue.length > 0) {
              setFilter && setFilter(e.target.value);
            } else {
              setFilter && setFilter("");
            }
          }}
        />
        <SearchIcon />
      </div>

      <div
        onClick={() => navigate("/profile")}
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
