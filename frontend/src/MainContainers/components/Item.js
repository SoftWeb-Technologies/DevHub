import React, { useState } from "react";
import { DisableCheckIcon } from "../../DevHubIcons";

const Item = ({ item, moveItem, setDragElement }) => {
  const [show, setShow] = useState(false);

  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);

  const onDragStart = ({ dataTransfer, target }) => {
    dataTransfer.setData("item", JSON.stringify(item));
    setDragElement(item);

    setTimeout(() => {
      target.style.visibility = "hidden";
    }, 1);
  };

  const onDragOver = (e) => {
    moveItem(e.target.innerText);
    e.preventDefault();
  };

  const onDragEnd = (e) => (e.target.style.visibility = "visible");

  return (
    <>
      <div
        className="item"
        onClick={onOpen}
        draggable="true"
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
        style={{
          width: "100%",
          backgroundColor: "#F1F1F1",
          borderRadius: "10px",
          padding: "1rem",
          position: "relative",
          marginTop: "1rem",
        }}
      >
        <h3 style={{ color: "#000", fontWeight: "500" }}>{item.title}</h3>
        <p
          style={{
            color: "rgba(0,0,0,0.6)",
            fontWeight: "400",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          {item.content.length > 50 ? `${item.content} + ...` : item.content}
        </p>

        <p
          style={{
            color: "var(--primary-clr)",
            fontWeight: "500",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          {item.date}
        </p>
        <div
          className="item-icons"
          style={{
            position: "absolute",
            right: "0",
            bottom: "10%",
          }}
        >
          <DisableCheckIcon
            fillColor={
              item.status === "done"
                ? "green"
                : item.status === "in progress"
                ? "orange"
                : "#979797"
            }
          />
        </div>
      </div>

      {/* window */}
    </>
  );
};

export default Item;
