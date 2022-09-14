import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CloseIcon, DeleteIcon, NotificationIcon } from "../../../DevHubIcons";
<<<<<<< HEAD
import { addItemsToReminder } from "../../../redux/actions/ReminderAction";
=======
import { addItemToTrash } from "../../../redux/actions/taskAction";
>>>>>>> 51e7f286ee8c030575fc7655c0ff1f4807c754fd
import CardInfo from "./CardInfo/CardInfo";
import "./TaskListModel.css";

import { db } from "../../../firebase";
import {
  doc,
  deleteDoc,
  collection,
  query,
  getDocs,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

function TaskListModel(props) {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const [showModal, setShowModal] = useState(false);
  const [isAddedToReminder, setIsAddedtoReminder] = useState(false);

  const addItemsToReminder = () => {
    dispatch(addItemsToReminder(props.id, props.items, isAddedToReminder));
=======

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

  const handleReminder = async () => {
    try {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);

      const queryData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      queryData.map(async (v) => {
        const randomId = Date.now();

        const dueDate = new Date(selectedItem.dueDate);

        if (
          v.id === currentUser.uid &&
          selectedItem.status !== "done" &&
          dueDate.getDate() >= new Date().getDate() &&
          dueDate.getMonth() + 1 >= new Date().getMonth() + 1 &&
          dueDate.getFullYear() >= new Date().getFullYear()
        ) {
          await setDoc(
            doc(db, `users/${v.id}/reminders`, randomId.toString()),
            {
              id: Date.now(),
              taskName: selectedItem.taskName,
              taskDesc: selectedItem.taskDesc,
              dueDate: selectedItem.dueDate,
              status: selectedItem.status,

              createdAt: serverTimestamp(),
            }
          );
        }
      });

      setIsActiveRemainder(!isActiveRemainder);
    } catch (err) {
      console.log(err);
    }
>>>>>>> 51e7f286ee8c030575fc7655c0ff1f4807c754fd
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
<<<<<<< HEAD
              onClick={() => {
                setIsAddedtoReminder(!isAddedToReminder);
                addItemsToReminder();
              }}
              fillColor={addItemsToReminder ? "yellow" : "#f2f2f2"}
            />

            <DeleteIcon onClick={() => console.log("delete task")} />
=======
              fillColor={"#008bb7"}
              isActive={isActiveRemainder}
              onClick={handleReminder}
            />
            <DeleteIcon onClick={handleTaskDelete} />
>>>>>>> 51e7f286ee8c030575fc7655c0ff1f4807c754fd
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
