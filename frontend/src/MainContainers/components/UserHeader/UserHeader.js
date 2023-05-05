import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon } from "../../../DevHubIcons";

const UserHeader = ({ displayName, title, library }) => {
  const navigate = useNavigate();
  const firstLetter = displayName?.charAt(0);
  return (
    <div className="blogSpace__header">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            flex: "100%",
          }}
          className="hide-on-desktop"
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
        </div>
        <h3
          className="hide-on-mobile"
          style={{
            flex: "100%",
          }}
        >
          {displayName && library && (
            <>
              {" "}
              Hello! <span style={{ color: "#008bb7" }}>{displayName}</span>
            </>
          )}

          {title}
        </h3>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            gap: "10px",
            marginRight: "2rem",
          }}
        >
          {library && (
            <div>
              <p
                onClick={() => navigate("/library")}
                style={{
                  color: "#000",
                  textTransform: "capitalize",
                  fontWeight: "500",
                  marginRight: "0.5rem",
                  cursor: "pointer",
                }}
              >
                Library
              </p>
            </div>
          )}
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
              textTransform: "uppercase",
            }}
          >
            {firstLetter}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
