import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../../components";
import { NotificationIcon, TrashIcon } from "../../DevHubIcons";
import { useNavigate } from "react-router-dom";
import { DashboardSideNavigation, TaskListModel } from "../components";
import UserHeader from "../components/UserHeader/UserHeader";
import "./TaskList.css";
import { data, statusIcons } from "../../data";
import Col from "../components/Col";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";

const TaskList = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isNavActive, setIsNavActive] = useState(false);
  const [isModelActive, setIsModelActive] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const navigate = useNavigate();

  const [items, setItems] = useState(data);
  const [dragEl, setDragEl] = useState(null);

  const onDrop = (item, status) => {
    if (item.status === status) {
      return;
    }

    const mapping = statusIcons.find((si) => si.status === status);

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });

      return [...newItems];
    });
  };

  const moveItem = (el) => {
    setItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (i) => i.content === dragEl.content
      );

      const hoverIndex = prevState.findIndex((i) => i.content === el);

      const newState = [...prevState];

      newState.splice(itemIndex, 1);
      newState.splice(hoverIndex, 0, dragEl);

      return [...newState];
    });
  };

  const setDragElement = (el) => setDragEl(el);

  const onAddItem = (col) => {
    console.log("add item placeholder in col: ", col);

    const status = statusIcons.find((si) => si.status === col);

    setItems((prevState) => {
      const highestId = Math.max.apply(
        Math,
        prevState.map((i) => i.id)
      );

      const months = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      return [
        ...prevState,
        {
          id: highestId + 1,
          date:
            new Date().getDate() +
            " " +
            months[new Date().getMonth()] +
            ", " +
            new Date().getFullYear(),
          icon: status.icon,
          status: status.status,
          title: "Placeholder item for card",
          content: "Example",
          issueType: "gg-bookmark",
          priority: "gg-chevron-double-down",
          estimate: "0m",
        },
      ];
    });
  };

  return (
    <div>
      <DashboardSideNavigation setIsNavActive={setIsNavActive} />

      <div className="main__taskList__container">
        <UserHeader
          title={"Your Tasks"}
          displayName={
            currentUser?.displayName || currentUser?.user?.name || "User"
          }
        />
        <TaskHeader
          setIsActive={setIsModelActive}
          createTaskHandler={(e) => onAddItem("todo's")}
          navigateToReminder={() => navigate("/reminder")}
          navigateToTrash={() => navigate("/trash")}
          setIsCreating={setIsCreating}
        />
        {/* <TaskListHeader /> */}

        <div className="taskList__body__container">
          <div className="taskList__content__container">
            {["todo's", "in progress", "done"].map((status) => {
              return (
                <div key={status} className={"col__wrapper"}>
                  <div className={"col__group"}>
                    <h4 className={"col__header"}>{status.toUpperCase()}</h4>
                    <p className={"col__count"}>
                      {items.filter((item) => item.status === status).length}
                    </p>
                  </div>

                  <DropWrapper onDrop={onDrop} status={status}>
                    <Col>
                      {items
                        .filter((i) => i.status === status)
                        .map((i) => (
                          <Item
                            key={i.id}
                            onClick={() => {
                              setIsModelActive(true);
                              setIsCreating(false);
                            }}
                            item={i}
                            moveItem={moveItem}
                            setDragElement={setDragElement}
                          />
                        ))}
                    </Col>
                  </DropWrapper>
                </div>
              );
            })}
          </div>
        </div>

        {isModelActive && (
          <TaskListModel
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setIsActive={setIsModelActive}
            isActive={isModelActive}
          />
        )}
      </div>
    </div>
  );
};

const TaskHeader = ({
  createTaskHandler,
  navigateToReminder,
  navigateToTrash,
  setIsActive,
  setIsCreating,
}) => {
  const [reminder, setReminder] = useState(false);
  return (
    <div className="taskHeader">
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "60px",
          }}
        >
          <div
            onClick={navigateToReminder}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <NotificationIcon onClick={navigateToReminder} />
            Reminders
          </div>

          <div
            onClick={navigateToTrash}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <TrashIcon onClick={navigateToTrash} />
            Trash
          </div>
        </div>

        <Button
          onClick={() => {
            setIsActive(true);
            setIsCreating(true);
          }}
          label={"Create Task"}
          primary={true}
        />
      </div>
    </div>
  );
};

export default TaskList;
