import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components";
import { NotificationIcon, TrashIcon } from "../../DevHubIcons";
import { useNavigate } from "react-router-dom";
import { DashboardSideNavigation, TaskListModel } from "../components";
import UserHeader from "../components/UserHeader/UserHeader";
import "./TaskList.css";
// import { data, statusIcons } from "../../data";
import Col from "../components/Col";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import { db } from "../../firebase";
import { doc, collection, onSnapshot, updateDoc } from "firebase/firestore";
import { setTasks } from "../../redux/actions/taskAction";

const TaskList = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { tasksList } = useSelector((state) => state.tasks);

  const [isNavActive, setIsNavActive] = useState(false);
  const [isModelActive, setIsModelActive] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [dragEl, setDragEl] = useState(null);

  const [cardData, setCardData] = useState({});

  React.useEffect(() => {
    const tasks = onSnapshot(
      collection(db, `users/${currentUser?.uid}/tasks`),
      (snapshot) => {
        const list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ uid: doc.id, ...doc.data() });
          setItems(list);
        });
        dispatch(setTasks(list));
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      tasks();
    };
  }, [dispatch, setItems, currentUser]);

  const onDrop = async (item, status) => {
    if (item.status === status) {
      return;
    }

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status });

      const docRef = doc(db, `users/${currentUser.uid}/tasks`, item.uid);
      updateDoc(docRef, { status });

      return [...newItems];
    });
  };

  const moveItem = (el) => {
    setItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (i) => i?.taskDesc === dragEl?.taskDesc
      );
      const hoverIndex = prevState.findIndex((i) => i?.taskDesc === el);
      const newState = [...prevState];
      newState.splice(itemIndex, 1);
      newState.splice(hoverIndex, 0, dragEl);
      return [...newState];
    });
  };

  const setDragElement = (el) => setDragEl(el);

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
                      {items.length > 0 &&
                        items?.filter((item) => item.status === status).length}
                    </p>
                  </div>

                  <DropWrapper onDrop={onDrop} status={status}>
                    <Col>
                      {items.length > 0 &&
                        items
                          .filter((i) => i.status === status)
                          .map((i, index) => (
                            <Item
                              key={index}
                              onClick={() => {
                                setIsModelActive(true);
                                setCardData(i);
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
            cardData={cardData}
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
