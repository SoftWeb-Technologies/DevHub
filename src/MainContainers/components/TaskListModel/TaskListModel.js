import React from "react";
import { useState } from "react";
import {
  CloseIcon,
  DeleteIcon,
  NotificationIcon,
  InviteIcon,
} from "../../../DevHubIcons";
import axios from "axios";
import { addItemToTrash } from "../../../redux/actions/taskAction";
import toast, { Toaster } from "react-hot-toast";
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

    await axios.delete(`/api/task/${props.cardData._id}`);

    props.setIsActive(false);
  };

  const notify = () => {
    toast.success("Reminder added!");
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
            <InviteIcon isActive={""} onClick={notify} />
            <Toaster />
            <NotificationIcon
              fillColor={"#008bb7"}
              isActive={isActiveRemainder}
              onClick={notify}
            />
            <Toaster />
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