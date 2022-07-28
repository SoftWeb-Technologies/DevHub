import React, { useState } from "react";
import { Button } from "../../../components";
import { db } from "../../../firebase";

import {
  setDoc,
  doc,
  collection,
  query,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import CloseIcon from "../../../DevHubIcons/CloseIcon";

import "./Editable.css";

function Editable(props) {
  const [addLabel, setAddLabel] = useState("");
  const [taskName, setTaskName] = useState(props.editableData.taskName || "");
  const [status, setStatus] = useState(props.editableData.status || "todo's");
  const [taskDesc, setTaskDesc] = useState(props.editableData.taskDesc || "");
  const [dueDate, setDueDate] = useState(props.editableData.dueDate || "");
  const [labels, setLabels] = useState(props.editableData.labels || []);

  const colors = ["#1ebffa", "#240959", "#9975bd", "#cf61a1"];

  const handleCreateTask = async (e) => {
    e.preventDefault();

    if (!taskName || !status || !taskDesc || !dueDate || !labels) {
      return;
    }

    try {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);

      const queryData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      queryData.map(async (v) => {
        const randomId = Date.now();

        await setDoc(
          doc(db, `users/${v.id}/tasks`, randomId.toString()),
          {
            id: Date.now(),
            taskName,
            status,
            taskDesc,
            dueDate,
            labels,
            createdAt: serverTimestamp(),
          },
          { merge: true }
        );
      });
    } catch (err) {
      console.log(err);
    }

    setTaskName("");
    setStatus("todo's");
    setTaskDesc("");
    setDueDate("");
    setLabels([]);
    setAddLabel("");

    props.setIsModelActive(false);
  };

  const handleEditTask = async (e) => {
    e.preventDefault();

    e.preventDefault();

    if (!taskName || !status || !taskDesc || !dueDate || !labels) {
      return;
    }

    try {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);

      const queryData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      queryData.map(async (v) => {
        await setDoc(doc(db, `users/${v.id}/tasks`, props.editableData.uid), {
          id: Date.now(),
          taskName,
          status,
          taskDesc,
          dueDate,
          labels,
        });
      });
    } catch (err) {
      console.log(err);
    }

    props.setIsModelActive(false);
  };

  return (
    <div className="editable" style={{ marginTop: "2rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
        id="editable__container"
      >
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          type={"text"}
          placeholder="Enter Task Name"
        />
        <div style={{ width: "100%" }}>
          <p style={{ color: "#000", fontWeight: "bold" }}>Status</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "1rem",
              padding: "0.5rem 0rem 1.5rem 0rem",
            }}
          >
            <StatusLabel
              status={status}
              label="todo's"
              setStatus={setStatus}
              color={"rgba(0,0,0,0.3)"}
            />
            <StatusLabel
              status={status}
              label="in progress"
              setStatus={setStatus}
              color={"orange"}
            />
            <StatusLabel
              status={status}
              label="done"
              setStatus={setStatus}
              color={"green"}
            />
          </div>
        </div>

        <div id="singleLine__two_textField">
          <input
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            type={"date"}
            placeholder="Enter Due Date"
          />
          <div
            style={{
              width: "100%",
              display: "flex",
            }}
          >
            <input
              value={addLabel}
              onChange={(e) => setAddLabel(e.target.value)}
              style={{
                width: "100%",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
              }}
              type={"text"}
              placeholder="Add labels"
            />
            <button
              onClick={() => {
                labels.length < 4 &&
                  addLabel !== "" &&
                  setLabels([...labels, addLabel]);

                setAddLabel("");
              }}
              style={{
                width: "30%",
                height: "2.3rem",
                borderRadius: "0.6rem",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
                outline: "none",
                border: "none",
                background: "#008bb7",
              }}
            >
              <div
                style={{
                  transform: "rotate(45deg)",
                }}
              >
                <CloseIcon fillColor="white" />
              </div>
            </button>
          </div>
        </div>

        {labels.length > 0 && (
          <div style={{ width: "100%" }}>
            <p style={{ color: "#000", fontWeight: "bold" }}>Labels</p>
            <div
              style={{ display: "flex", gap: "10px", marginTop: "0.6578rem" }}
            >
              {labels.map((item, index) => {
                return (
                  <LabelSelector
                    key={index}
                    label={item}
                    setLabels={setLabels}
                    color={colors[index]}
                  />
                );
              })}
            </div>
          </div>
        )}

        <div id="editable__description" style={{ width: "100%" }}>
          <textarea
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            maxLength={300}
            placeholder="Enter task description..."
          />
        </div>

        <div>
          {props.isEditable ? (
            <div
              style={{
                marginTop: "1rem",
              }}
            >
              <Button
                onClick={handleEditTask}
                label={"Update Task"}
                primary={true}
              />
            </div>
          ) : (
            <div
              style={{
                marginTop: "1rem",
              }}
            >
              <Button
                onClick={handleCreateTask}
                label={"Create Task"}
                primary={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const StatusLabel = ({ status, setStatus, color, label }) => {
  return (
    <p
      onClick={() => setStatus(label)}
      style={{
        cursor: "pointer",
        color: status === label ? "white" : "rgba(0,0,0,0.3)",
        padding: "0.5rem 0.5rem",
        borderRadius: "0.6rem",
        fontSize: "0.9rem",
        border: status === label ? "" : "1.5px solid rgba(0,0,0,0.3)",
        background: status === label ? color : "transparent",
      }}
    >
      {label.toUpperCase()}
    </p>
  );
};

const LabelSelector = ({ label, color }) => {
  return (
    <p
      style={{
        textTransform: "capitalize",
        color: "white",
        background: color,
        padding: "0.3rem 0.5rem",
        borderRadius: "0.6rem",
      }}
    >
      {label}
    </p>
  );
};

export default Editable;
