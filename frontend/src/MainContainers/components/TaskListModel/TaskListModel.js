import React from "react";
import { useState } from "react";
import { CloseIcon, DeleteIcon, NotificationIcon } from "../../../DevHubIcons";
import CardInfo from "./CardInfo/CardInfo";
import "./TaskListModel.css";

function TaskListModel(props) {
  const [showModal, setShowModal] = useState(false);
  // const { id, title, date, tasks, labels } = props?.card;

  return (
    <div className="taskListModel">
      <div
        className="task__list__model__container"
        style={{
          transform: props.isActive ? "scale(0)" : "scale(0.8)",
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
              zIndex: "1",
            }}
          >
            <NotificationIcon onClick={() => console.log("set notification")} />
            <DeleteIcon onClick={() => console.log("delete task")} />
            <CloseIcon onClick={() => props.setIsActive(false)} />
          </div>

          <CardInfo
            isCreating={props.isCreating}
            setIsCreating={props.setIsCreating}
            onClose={() => setShowModal(false)}
            card={props.card}
            boardId={props.boardId}
            updateCard={props.updateCard}
          />
        </div>
      </div>

      <div className="taskListModel__bg" />
    </div>
  );
}

export default TaskListModel;
