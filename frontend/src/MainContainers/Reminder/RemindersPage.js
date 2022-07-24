import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Title } from "../../components";
import { EmptyCuateImg } from "../../constants/Images";
import { removeItemFromLibrary } from "../../redux/actions/libActions";
import { DashboardSideNavigation } from "../components";
import UserHeader from "../components/UserHeader/UserHeader";

import "./RemindersPage.css";

const RemindersPage = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { libItems } = useSelector((state) => state.lib);

  const [isNavActive, setIsNavActive] = useState(false);
  const [isPopUpBoxActive, setIsPopUpBoxActive] = useState(false);
  const [popUpData, setPopUpData] = useState(null);

  const removeItemFromLibrary = (id) => {
    dispatch(removeItemFromLibrary(id));
  };

  return (
    <div>
      <Title title="Reminders" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <div id="blogspace">
        <UserHeader
          displayName={
            currentUser?.displayName || currentUser?.user?.name || "User"
          }
        />
        <div className="reminders__header">
          <h1>
            Your <span style={{ color: "#008bb7" }}>Reminders!</span>
          </h1>
        </div>

        {libItems.length > 0 ? (
          <div
            className={`reminders__main__container  ${
              isNavActive ? "active" : ""
            }`}
          >
            {/* <div>{libItems.slice(0, 5).map((item, index) => {})}</div> */}
          </div>
        ) : (
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                minWidth: "250px",
                opacity: "0.7",
                pointerEvents: "none",
              }}
            >
              <img src={EmptyCuateImg} alt="no-reminders" />
            </div>
            <h1
              style={{
                fontSize: "1.5rem",
                color: "grey",
                opacity: "0.5",
              }}
            >
              You have no reminders
            </h1>
            <p>Add</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemindersPage;
