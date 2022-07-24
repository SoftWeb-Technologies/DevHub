import React, { useEffect, useState } from "react";
import { matchRoutes } from "react-router-dom";
import {
  AiFillCheckSquare,
  List,
  AiFillTag,
  Type,
} from "../../../../DevHubIcons";
import Editable from "../../Editable/Editable";
import "./CardInfo.css";

function CardInfo(props) {
  const colors = [
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959",
  ];

  const [selectedColor, setSelectedColor] = useState();
  const [values, setValues] = useState({
    ...props.card,
  });

  const updatedTitle = (value) => {
    setValues({
      ...values,
      title: value,
    });
  };

  const updatedDesc = (value) => {
    setValues({
      ...values,
      desc: value,
    });
  };

  const addLabel = (label) => {
    const index = values.labels.findIndex((item) => item.text === label.text);
    if (index > -1) return;

    setSelectedColor("");
    setValues({
      ...values,
      labels: [...values.labels, label],
    });
  };

  const removeLabel = (label) => {
    const tempLabels = values.labels.filter((item) => item.text !== label.text);

    setValues({
      ...values,
      labels: tempLabels,
    });
  };

  const addTask = (value) => {
    const task = {
      id: Date.now() + matchRoutes.random() * 2,
      completed: false,
      text: value,
    };
    setValues({
      ...values,
      tasks: [...values.tasks, task],
    });
  };

  const removeTask = (id) => {
    const tasks = [...values.tasks];

    const tempTasks = tasks.filter((item) => item.id !== id);
    setValues({
      ...values,
      tasks: tempTasks,
    });
  };

  const updateTask = (id, value) => {
    const tasks = [...values.tasks];

    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;

    tasks[index].completed = value;

    setValues({
      ...values,
      tasks,
    });
  };

  const calculatePercent = () => {
    if (!values.tasks?.length) return 0;
    const completed = values.tasks?.filter((item) => item.completed)?.length;
    return (completed / values.tasks?.length) * 100;
  };

  const updateDate = (date) => {
    if (!date) return;

    setValues({
      ...values,
      date,
    });
  };

  useEffect(() => {
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);
  }, [values]);

  return (
    <div className="cardinfo">
      <div className="cardinfo_box">
        <div className="cardinfo_box_title">
          <Type />
          <p>Title</p>
        </div>
      </div>

      <div className="cardinfo_box">
        <div className="cardinfo_box_title">
          <List />
          <p>Description</p>
        </div>
      </div>

      <div className="cardinfo_box">
        <div className="cardinfo_box_title">
          <p>Date</p>
        </div>
        <input
          type="date"
          defaultValue={values.date}
          min={new Date().toISOString().substr(0, 10)}
          onChange={(event) => updateDate(event.target.value)}
        />
      </div>

      <div
        className="cardinfo_box"
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div className="cardinfo_box_title">
          <AiFillTag />
          <p>Labels</p>
        </div>

        <ul style={{ display: "flex", gap: "20px", width: "100%" }}>
          {colors.map((item, index) => (
            <li
              key={index + item}
              style={{ backgroundColor: item }}
              className={selectedColor === item ? "li_active" : ""}
              onClick={() => setSelectedColor(item)}
            />
          ))}
        </ul>
        <Editable
          text="Add Label"
          placeholder="Enter label text"
          onSubmit={(value) => addLabel({ color: selectedColor, text: value })}
        />
      </div>

      <div className="cardinfo_box">
        <div className="cardinfo_box_title">
          <AiFillCheckSquare />
          <p>Tasks</p>
        </div>
        <div className="cardinfo_box_progress-bar">
          <div
            className="cardinfo_box_progress"
            style={{
              width: `${calculatePercent()}%`,
              backgroundColor: calculatePercent() === 100 ? "limegreen" : "",
            }}
          />
        </div>
        <div className="cardinfo_box_task_list">
          {values.tasks?.map((item) => (
            <div key={item.id} className="cardinfo_box_task_checkbox">
              <input
                type="checkbox"
                defaultChecked={item.completed}
                onChange={(event) => updateTask(item.id, event.target.checked)}
              />
              <p className={item.completed ? "completed" : ""}>{item.text}</p>
            </div>
          ))}
        </div>
        <Editable
          text={"Add a Task"}
          placeholder="Enter task"
          onSubmit={addTask}
        />
      </div>
    </div>
  );
}

export default CardInfo;
