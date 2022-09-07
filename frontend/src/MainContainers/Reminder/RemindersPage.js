import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Title } from "../../components";
import { EmptyCuateImg } from "../../constants/Images";
import { DashboardSideNavigation } from "../components";
import UserHeader from "../components/UserHeader/UserHeader";

import "./RemindersPage.css";

const RemindersPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { remainderItems } = useSelector((state) => state.remainder);
  const [isNavActive, setIsNavActive] = useState(false);

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

        {remainderItems?.length > 0 ? (
          <div
            className={`reminders__main__container  ${
              isNavActive ? "active" : ""
            }`}
          >
            <div id="remainder__main">
              {remainderItems?.slice(0, 5).map((item, index) => {
                return <NotificationCard item={item} />;
              })}
            </div>
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
          </div>
        )}
      </div>
    </div>
  );
};

const NotificationCard = ({ item }) => {
  console.log(item);
  return (
    <div
      id="remainder__card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h3>{item.taskName}</h3>
        <p>{item.taskDesc}</p>
      </div>
      <div>
        <h4
          style={{
            textTransform: "capitalize",
            color:
              item.status === "done"
                ? "green"
                : item.status === "in progress"
                ? "rgba(255, 106, 0, 0.7)"
                : "#000000d0",
          }}
        >
          {item.status}
        </h4>
        <p
          style={{
            color: "#000000d0",
            opacity: 0.8,
          }}
        >
          {item.dueDate}
        </p>
      </div>
    </div>
  );
};

export default RemindersPage;
