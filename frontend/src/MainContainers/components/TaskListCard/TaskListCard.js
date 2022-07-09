import React from "react";
import { ActiveCheckIcon, DisableCheckIcon } from "../../../DevHubIcons";
import "./TaskListCard.css";

const TaskListCard = ({ title, description, date, isCompleted, isPending }) => {
  return (
    <div className="taskListCard__container">
      <div>
        {isPending && <p className="isPending">pending</p>}
        <h2>{title}</h2>
        <p className="desc">{description.slice(0, 60) + "..."}</p>

        <p className="date">{date}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="mark_as_done">Mark as done</p>
          {isCompleted ? <ActiveCheckIcon /> : <DisableCheckIcon />}
        </div>
      </div>
    </div>
  );
};

export default TaskListCard;
