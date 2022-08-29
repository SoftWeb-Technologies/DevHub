export const setTasks = (tasks) => (dispatch) => {
  try {
    dispatch({ type: "SET_TASKS_START" });

    dispatch({ type: "SET_TASKS_SUCCESS", payload: tasks });
  } catch (e) {
    dispatch({ type: "SET_TASKS_FAIL", payload: e.message });
  }
};

export const addItemToTrash = (item) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "TASK_DELETE_SUCCESS",
      payload: item,
    });

    // Storing data into the local storage
    localStorage.setItem(
      "trashItems",
      JSON.stringify(getState().trashStore.trashItems)
    );
  } catch (err) {
    dispatch({ type: "TASK_DELETE_FAIL", payload: err.message });
  }
};

export const trashReStore = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "RESTORE_TRASH_ITEM", payload: id });

    localStorage.setItem(
      "trashItems",
      JSON.stringify(getState().trashStore.trashItems)
    );
  } catch (err) {
    dispatch({ type: "TASK_DELETE_FAIL", payload: err.message });
  }
};
