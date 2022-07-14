import React from "react";
import { CloseIcon, DeleteIcon, NotificationIcon } from "../../../DevHubIcons";
import "./TaskListModel.css";

const TaskListModel = ({ isActive, setIsActive }) => {
  return (
    <div className="taskListModel">
      <div
        className="task__list__model__container"
        style={{
          transform: isActive ? "scale(0)" : "scale(0.8)",
        }}
      >
        <div className="task__list__model__content">
          <div
            style={{
              position: "absolute",
              right: "1.5rem",
              top: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <NotificationIcon onClick={() => console.log("set notification")} />
            <DeleteIcon onClick={() => console.log("delete task")} />
            <CloseIcon onClick={() => setIsActive(false)} />
          </div>
        </div>
      </div>

      <div className="taskListModel__bg" />
    </div>
  );
};

export default TaskListModel;
