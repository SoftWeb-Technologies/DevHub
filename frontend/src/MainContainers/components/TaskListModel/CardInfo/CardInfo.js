import React, { useState } from "react";

import { Button } from "../../../../components";
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
  const [updateTask, setUpdateTask] = useState(false);
  const [values, setValues] = useState({
    ...props.card,
  });

  const [editableData, setEditableData] = useState({});

  const { id, taskName, taskDesc, labels, dueDate, status } = props.cardData;

  React.useEffect(() => {
    if (id) {
      props.setSelectedItem(props.cardData);
    }
  }, [id, props.setSelectedItem, props]);

  return (
    <>
      {props.isCreating ? (
        <Editable
          setIsModelActive={props.setIsModelActive}
          editableData={editableData}
          isEditable={updateTask}
        />
      ) : (
        <div className="cardinfo">
          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
              <Type />
              <p>{taskName}</p>
            </div>
          </div>

          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
              <List />
              <p>{taskDesc}</p>
            </div>
          </div>

          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
              <p>Date</p>
            </div>
            <input
              type="date"
              defaultValue={dueDate}
              min={new Date().toISOString().substr(0, 10)}
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
              {labels.map((item, index) => (
                <li
                  key={item.id}
                  style={{
                    backgroundColor: colors[index],
                    width: "fit-content",
                    color: "white",
                  }}
                  className={selectedColor === colors[index] ? "li_active" : ""}
                  onClick={() => setSelectedColor(item)}
                >
                  {labels[index]}
                </li>
              ))}
            </ul>
          </div>

          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
              <AiFillCheckSquare />
              <p>Tasks</p>
            </div>
            <div className="cardinfo_box_progress-bar">
              <div
                className="cardinfo_box_progress"
                // style={{
                //   width: `${calculatePercent()}%`,
                //   backgroundColor:
                //     calculatePercent() === 100 ? "limegreen" : "",
                // }}
              />
            </div>
            <div className="cardinfo_box_task_list">
              {values.tasks?.map((item) => (
                <div key={item.id} className="cardinfo_box_task_checkbox">
                  <input
                    type="checkbox"
                    defaultChecked={item.completed}
                    onChange={(event) => {}}
                  />
                  <p className={item.completed ? "completed" : ""}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              margin: "0 auto",
            }}
          >
            <Button
              onClick={() => {
                props.setIsCreating(true);
                setUpdateTask(true);
                setEditableData(props.cardData);
              }}
              label="Edit Now"
              primary={true}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CardInfo;
