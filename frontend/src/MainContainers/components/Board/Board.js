import React from "react";

const Board = (props) => {
  const drop = (e) => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData("card_id");
    const card_dom = document.getElementById(card_id);

    card_dom.style.display = "block";
    e.target.appendChild(card_dom);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={drop}
      id={props.id}
      className={props.className}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

export default Board;
