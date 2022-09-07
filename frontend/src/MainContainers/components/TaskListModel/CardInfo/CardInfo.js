import React, { useState } from "react";

import { Button } from "../../../../components";
import { FlagIcon, ClockIcon, LabelIcon } from "../../../../DevHubIcons";
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
              <h1>{taskName}</h1>
            </div>
          </div>

          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
              <FlagIcon />
              <p
                style={{
                  color: "#808080",
                }}
              >
                Status
              </p>
              <p
                style={{
                  textTransform: "capitalize",
                  background:
                    status === "done"
                      ? "green"
                      : status === "in progress"
                      ? "orange"
                      : "grey",
                  padding: "5px 10px",
                  borderRadius: "50px",
                  fontSize: "15px",
                  color: "white",
                  marginLeft: "40px",
                }}
              >
                {status}
              </p>
            </div>
          </div>

          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
              <ClockIcon />
              <p
                style={{
                  color: "#808080",
                }}
              >
                Timeline
              </p>
              <p
                style={{
                  fontWeight: "500",
                  marginLeft: "28px",
                }}
              >
                {dueDate}
              </p>
            </div>
          </div>

          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
              <LabelIcon />
              <p
                style={{
                  color: "#808080",
                }}
              >
                Labels
              </p>
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  width: "100%",
                  marginLeft: "45px",
                }}
              >
                {labels.slice(0, 3).map((item, index) => (
                  <li
                    key={item.id}
                    style={{
                      backgroundColor: colors[index],
                      width: "fit-content",
                      color: "white",
                    }}
                    className={
                      selectedColor === colors[index] ? "li_active" : ""
                    }
                    onClick={() => setSelectedColor(item)}
                  >
                    {labels[index]}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "2px",
              background: "#000",
              opacity: 0.1,
            }}
          />

          <div className="cardinfo_box">
            <div className="cardinfo_box_title">
              <h2
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                Description
              </h2>
            </div>
            <textarea
              style={{
                height: "90px",
                outline: "none",
                border: "none",
                resize: "none",
                fontFamily: "inherit",
                fontWeight: "normal",
                fontSize: "16px",
                color: "#000",
                opacity: 0.8,
              }}
              value={taskDesc}
            />
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
