import React from "react";
import { MenuIcon } from "../../../DevHubIcons";

const UserHeader = ({ displayName }) => {
  const firstLetter = displayName.charAt(0);
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
        <h3
          style={{
            flex: "100%",
          }}
        >
          Hello! <span style={{ color: "#008bb7" }}>{displayName}</span>
        </h3>
        <div
          style={{
            display: "flex",
            width: "fit-content",
            gap: "10px",
            marginRight: "2rem",
          }}
        >
          <div>
            <p
              style={{
                color: "#000",
                textTransform: "capitalize",
                fontWeight: "500",
                marginRight: "2rem",
                cursor: "pointer",
              }}
            >
              Library
            </p>
          </div>
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
      </div>
    </div>
  );
};

export default UserHeader;
