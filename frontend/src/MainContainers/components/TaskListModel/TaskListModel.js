import React from "react";
import { useState } from "react";
import { CloseIcon, DeleteIcon, NotificationIcon } from "../../../DevHubIcons";
import {
  addItemToRemainder,
  addItemToTrash,
} from "../../../redux/actions/taskAction";
import CardInfo from "./CardInfo/CardInfo";
import "./TaskListModel.css";

import { db } from "../../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

function TaskListModel(props) {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const [showModal, setShowModal] = useState(false);
  const [isActiveRemainder, setIsActiveRemainder] = useState(false);

  const [selectedItem, setSelectedItem] = useState("");

  const handleTaskDelete = async () => {
    if (
      prompt("Do you want to delete this task? Yes/No").toLowerCase() === "no"
    ) {
      return;
    }

    dispatch(addItemToTrash(selectedItem));

    await deleteDoc(
      doc(db, `users/${currentUser?.uid}/tasks/${selectedItem.uid}`)
    );

    props.setIsActive(false);
  };

  const handleReminder = () => {
    dispatch(addItemToRemainder(selectedItem));
    setIsActiveRemainder(!isActiveRemainder);
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
            <NotificationIcon
              fillColor={"#008bb7"}
              isActive={isActiveRemainder}
              onClick={handleReminder}
            />
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
