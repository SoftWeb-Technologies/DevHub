export const setTasks = (tasks) => (dispatch) => {
  try {
    dispatch({ type: "SET_TASKS", payload: tasks });
  } catch (e) {
    console.log(e);
  }
};
