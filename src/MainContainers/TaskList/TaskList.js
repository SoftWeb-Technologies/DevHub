import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components";
import { NotificationIcon, TrashIcon, InviteIcon } from "../../DevHubIcons";
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
import axios from "axios";

const TaskList = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const [isNavActive, setIsNavActive] = useState(false);
  const [isModelActive, setIsModelActive] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [dragEl, setDragEl] = useState(null);

  const [cardData, setCardData] = useState({});

  React.useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const tasks = await axios.get("/api/tasks");

        if (tasks.data) {
          dispatch(setTasks(tasks.data.tasks));
          setItems(tasks.data.tasks);
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchAllTasks();
  }, [dispatch, setItems]);

  const showNotification = (dueDate) => {
    const notification = new Notification("Reminder message from DevHub", {
      body: `Hey! you have set a remainder for doing a task, which should be done by ${dueDate}`,
      icon: require("../../assets/images/logo/devHub-logo.svg"),
    });

    notification.onclick = (e) => {
      window.location.href = "http://localhost:3000/remainder";
    };
  };

  const [remainderItemsList, setRemainderItemsList] = useState([]);

  React.useEffect(() => {
    const tasks = onSnapshot(
      collection(db, `users/${currentUser?.uid}/reminders`),
      (snapshot) => {
        const list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ uid: doc.id, ...doc.data() });
          setRemainderItemsList(list);
        });
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      tasks();
    };
  }, [setRemainderItemsList, currentUser, dispatch]);

  // React.useEffect(() => {
  //   const date = new Date();
  //   const currentMonth = date.getMonth() + 1;
  //   const currentDate = date.getDate();

  //   remainderItemsList.map((item, index) => {
  //     const dueDate = new Date(item.dueDate);

  //     if (
  //       dueDate.getDate() >= currentDate &&
  //       dueDate.getMonth() + 1 === currentMonth
  //     ) {
  //       if (Notification.permission === "granted") {
  //         showNotification(item.dueDate);
  //       } else if (Notification.permission !== "denied") {
  //         Notification.requestPermission().then((permission) => {
  //           if (permission === "granted") {
  //             showNotification(item.dueDate);
  //           }
  //         });
  //       }
  //     }

  //     return null;
  //   });
  // });

  const updateOnDropTask = async (itemId, status) => {
    try {
      const res = await axios.put(`/api/task/${itemId}/status`, {
        status,
      });

      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  const onDrop = async (item, status) => {
    if (item.status === status) {
      return;
    }

    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item._id)
        .concat({ ...item, status });
      console.log("updated");

      // const docRef = doc(db, `users/${currentUser.uid}/tasks`, item.uid);
      // updateDoc(docRef, { status });
      updateOnDropTask(item._id, status);

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
                      {items?.length > 0 &&
                        items?.filter((item) => item.status === status).length}
                    </p>
                  </div>

                  <DropWrapper onDrop={onDrop} status={status}>
                    <Col>
                      {items?.length > 0 &&
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
  // const [reminder, setReminder] = useState(false);
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
        <div className="taskHeader__container">
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
