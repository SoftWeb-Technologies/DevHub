import React from "react";
import { useState } from "react";
import { ActiveCheckIcon, DisableCheckIcon } from "../../../DevHubIcons";
import "./TaskListCard.css";

const TaskListCard = (props) => {
  const [isPopUpBoxActive, setIsPopUpBoxActive] = useState(false);
  
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      draggable={props.draggable}
      className="taskListCard__container"
      openPoster={() => setIsPopUpBoxActive(true)}
    >
      {/* modal */}
      <div
          onClick={() => {
            setIsPopUpBoxActive(false);
          }}
          className={`contest__poster__model ${
            isPopUpBoxActive ? "active" : ""
          }`}
        />

          <div
          className={`contest__poster__container ${
            isPopUpBoxActive ? "active" : ""
          }`}
        ></div>
        
      <div>
        {props.isPending && <p className="isPending">Pending</p>}
        <h2>{props.title}</h2>
        <p className="desc">{props.description.slice(0, 60) + "..."}</p>

        <p className="date">{props.date}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="mark_as_done">Mark as done</p>
          {props.isCompleted ? <ActiveCheckIcon /> : <DisableCheckIcon />}
        </div>
      </div>
    </div>
  );
};

export default TaskListCard;
