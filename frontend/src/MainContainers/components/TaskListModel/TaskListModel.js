import React from "react";
import { useState } from "react";
import { CloseIcon, DeleteIcon, NotificationIcon } from "../../../DevHubIcons";
import { addItemToTrash } from "../../../redux/actions/taskAction";
import CardInfo from "./CardInfo/CardInfo";
import "./TaskListModel.css";

import { useDispatch } from "react-redux";

function TaskListModel(props) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState("");

  const handleTaskDelete = () => {
    dispatch(addItemToTrash(selectedItem));
  };

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
            <DeleteIcon onClick={handleTaskDelete} />
            <CloseIcon onClick={() => props.setIsActive(false)} />
          </div>

          <CardInfo
            setIsModelActive={props.setIsActive}
            cardData={props.cardData}
            isCreating={props.isCreating}
            setIsCreating={props.setIsCreating}
            onClose={() => {
              setShowModal(false);
            }}
            setSelectedItem={setSelectedItem}
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
