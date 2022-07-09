import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components";
import { NotificationIcon, TrashIcon } from "../../DevHubIcons";
import { DashboardSideNavigation } from "../components";
import TaskListCard from "../components/TaskListCard/TaskListCard";
import UserHeader from "../components/UserHeader/UserHeader";
import "./TaskList.css";

const TaskList = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isNavActive, setIsNavActive] = useState(false);
  const [filter, setFilter] = useState("");

  return (
    <div>
      <DashboardSideNavigation setisNavActive={setIsNavActive} />

      <div>
        <UserHeader
          title={"Your Tasks"}
          displayName={currentUser.displayName}
        />
        <TaskHeader />
        <TaskListHeader />

        <div className="taskList__body__container">
          <div className="taskList__content__container">
            <div className="taskList__container">
              <TaskListCard
                title={"IDE Set-Up"}
                date={"12/12/2020"}
                description={
                  "lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj  "
                }
              />
              <TaskListCard
                title={"IDE Set-Up"}
                date={"12/12/2020"}
                description={
                  "lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj  "
                }
              />
            </div>
            <div className="taskList__container">
              <TaskListCard
                isPending={true}
                title={"IDE Set-Up"}
                date={"12/12/2020"}
                description={
                  "lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj  "
                }
              />
            </div>
            <div className="taskList__container">
              <TaskListCard
                title={"IDE Set-Up"}
                date={"12/12/2020"}
                isCompleted={true}
                description={
                  "lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj lajsldkfjlsdjfljsdf jalsdkfjl sadflj  "
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TaskHeader = () => {
  return (
    <div className="taskHeader">
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <NotificationIcon />
            Reminders
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <TrashIcon />
            Trash
          </div>
        </div>

        <Button label={"Create Task"} primary={true} />
      </div>
    </div>
  );
};

const TaskListHeader = () => {
  return (
    <div className="taskListHeader">
      <div className="taskListHeader__contents">
        <div>
          <h3>Todo's </h3>
        </div>
        <div>
          <h3>Pending</h3>
        </div>
        <div>
          <h3>Completed</h3>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
