import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="main_container">
        <div className="dot">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
          <span style={{ "--i": 4 }}></span>
          <span style={{ "--i": 5 }}></span>
          <span style={{ "--i": 6 }}></span>
          <span style={{ "--i": 7 }}></span>
          <span style={{ "--i": 8 }}></span>
          <span style={{ "--i": 9 }}></span>
          <span style={{ "--i": 10 }}></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
