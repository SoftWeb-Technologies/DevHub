import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSideNavigation, Header } from "../components";

const TaskList = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isNavActive, setIsNavActive] = useState(false);
  const [filter, setFilter] = useState("");

  return (
    <div>

      <DashboardSideNavigation setisNavActive={setIsNavActive} />
      <div className="tasklist__main__container">
        <div className="header__main__container">
          <div className="tasklist__header__container">
          <Header
            displayName={currentUser?.displayName}
            setFilter={setFilter}
          />
      </div>
      <div className="user__name__container">
        <h2 style={{ color: "#fff", marginTop: "0.7rem" }}>
          Your Tasks
          </h2>
          </div>
          <div
          className={`techHunt__body__container ${isNavActive ? "active" : ""}`}
        ></div>
    </div>
    </div>
    </div>
  );
};

export default TaskList