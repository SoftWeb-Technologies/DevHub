export const tasksReducer = (tasks = [], action) => {
  switch (action.type) {
    case "SET_TASKS":
      return [...tasks, action.payload];
    default:
      return tasks;
  }
};
