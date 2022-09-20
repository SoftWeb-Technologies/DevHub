import { collection, onSnapshot } from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components";
import { EmptyCuateImg } from "../../constants/Images";
import { db } from "../../firebase";
import { subscribeUser } from "../../subscription";
import { DashboardSideNavigation } from "../components";
import UserHeader from "../components/UserHeader/UserHeader";

import "./RemindersPage.css";

const RemindersPage = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isNavActive, setIsNavActive] = useState(false);

  const [remainderItemsList, setRemainderItemsList] = useState([]);

  React.useEffect(() => {
    const tasks = onSnapshot(
      collection(db, `users/${currentUser?.uid}/reminders`),
      (snapshot) => {
        const list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ uid: doc.id, ...doc.data() });
          setRemainderItemsList(list);
        });
        // dispatch(addItemToRemainder(list));

        list.map((item) => {
          return subscribeUser(currentUser.displayName, item.dueDate);
        });
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      tasks();
    };
  }, [setRemainderItemsList, currentUser, dispatch]);

  return (
    <div>
      <Title title="Remainders" />

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

        {remainderItemsList?.length > 0 ? (
          <div
            className={`reminders__main__container  ${
              isNavActive ? "active" : ""
            }`}
          >
            <div id="remainder__main">
              {remainderItemsList?.reverse()?.map((item, index) => {
                return <NotificationCard key={index} item={item} />;
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
  return (
    <div
      id="remainder__card"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
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
