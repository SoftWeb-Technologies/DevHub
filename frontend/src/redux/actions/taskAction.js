export const setTasks = (tasks) => (dispatch) => {
  try {
    dispatch({ type: "SET_TASKS_START" });

    dispatch({ type: "SET_TASKS_SUCCESS", payload: tasks });
  } catch (e) {
    dispatch({ type: "SET_TASKS_FAIL", payload: e.message });
  }
};
