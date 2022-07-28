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
