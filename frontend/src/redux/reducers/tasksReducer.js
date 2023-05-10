const initialTasks = {
  loading: false,
  taskList: [],
};

export const tasksReducer = (tasks = initialTasks, action) => {
  switch (action.type) {
    case "SET_TASKS_START":
      return {
        loading: false,
        tasksList: [],
      };

    case "SET_TASKS_SUCCESS":
      return {
        ...tasks,
        loading: true,
        tasksList: action.payload,
      };

    case "SET_TASKS_FAIL":
      return {
        ...tasks,
        loading: false,
        error: action.payload,
      };

    default:
      return tasks;
  }
};

export const trashReducer = (
  state = {
    trashItems: localStorage.getItem("trashItems")
      ? JSON.parse(localStorage.getItem("trashItems"))
      : [],
  },
  action
) => {
  switch (action.type) {
    case "TASK_DELETE_SUCCESS":
      const item = action.payload;

      const isTaskExit = state.trashItems.find((i) => i.id === item.id);

      if (isTaskExit) {
        return {
          ...state,
          trashItems: state.trashItems.map((i) => {
            return i.id === isTaskExit ? item : i;
          }),
        };
      } else {
        return {
          ...state,
          trashItems: [...state.trashItems, item],
        };
      }

    case "RESTORE_TRASH_ITEM":
      return {
        ...state,
        trashItems: state.trashItems.filter((i) => i.id !== action.payload),
      };

    default:
      return state;
  }
};

export const remainderReducer = (
  state = {
    remainderItems: localStorage.getItem("remainderItem")
      ? JSON.parse(localStorage.getItem("remainderItem"))
      : [],
  },
  action
) => {
  switch (action.type) {
    case "SET_REMAINDER_TASK_SUCCESS":
      const item = action.payload;

      const isTaskExit = state.remainderItems.find((i) => i.id === item.id);

      if (isTaskExit) {
        return {
          ...state,
          remainderItems: state.remainderItems.map((i) => {
            return i.id === isTaskExit ? item : i;
          }),
        };
      } else {
        return {
          ...state,
          remainderItems: [...state.remainderItems, item],
        };
      }

    case "SET_REMAINDER_TASK_FAIL":
      return {
        ...state,
        remainderItems: state.remainderItems.filter(
          (i) => i.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
