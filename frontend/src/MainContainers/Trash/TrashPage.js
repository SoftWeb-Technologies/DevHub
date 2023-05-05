import {
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components";
import { EmptyCuateImg } from "../../constants/Images";
import { DisableCheckIcon } from "../../DevHubIcons";
import TrashRestoreIcon from "../../DevHubIcons/TrashRestoreIcon";
import { db } from "../../firebase";
import { trashReStore } from "../../redux/actions/taskAction";

import { DashboardSideNavigation } from "../components";
import UserHeader from "../components/UserHeader/UserHeader";

import "./TrashPage.css";

const TrashPage = () => {
  const dispatch = useDispatch();
  const { trashItems } = useSelector((state) => state.trashStore);
  const { currentUser } = useSelector((state) => state.user);

  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <div>
      <Title title="Trash" />

      <DashboardSideNavigation setIsNavActive={setIsNavActive} />
      <div id="blogspace">
        <UserHeader displayName={currentUser?.name} />
        <div className="reminders__header">
          <h1>
            Deleted <span style={{ color: "#008bb7" }}>Tasks!</span>
          </h1>
        </div>

        {trashItems.length > 0 ? (
          <div
            className={`reminders__main__container  ${
              isNavActive ? "active" : ""
            }`}
          >
            <div id="trashPage__main">
              {trashItems.map((item, index) => {
                return (
                  <div key={index} id="trashPage__card">
                    <h3>{item.taskName}</h3>
                    <p>{item.taskDesc}</p>

                    <p id="trashPage__dueDate">{item.dueDate}</p>

                    <div id="trashPage__itemRestore">
                      <TrashRestoreIcon
                        onClick={async () => {
                          const q = query(collection(db, "users"));
                          const querySnapshot = await getDocs(q);

                          const queryData = querySnapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                          }));

                          queryData.map(async (v) => {
                            const randomId = Date.now();
                            if (v.id === currentUser.uid) {
                              await setDoc(
                                doc(
                                  db,
                                  `users/${v.id}/tasks`,
                                  randomId.toString()
                                ),
                                {
                                  id: Date.now(),
                                  taskName: item.taskName,
                                  status: item.status,
                                  taskDesc: item.taskDesc,
                                  dueDate: item.dueDate,
                                  labels: item.labels,
                                  createdAt: serverTimestamp(),
                                }
                              );
                            }
                          });

                          dispatch(trashReStore(item.id));
                        }}
                      />
                    </div>

                    <div id="trashPage__status">
                      <DisableCheckIcon
                        fillColor={
                          item.status === "done"
                            ? "green"
                            : item.status === "in progress"
                            ? "orange"
                            : "#979797"
                        }
                      />
                    </div>
                  </div>
                );
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
              Empty Trash
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrashPage;
