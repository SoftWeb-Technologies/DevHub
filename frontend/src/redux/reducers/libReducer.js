import * as types from "../contacts/libActionTypes";

export const libReducer = (
  state = {
    libItems: localStorage.getItem("libItems")
      ? JSON.parse(localStorage.getItem("libItems"))
      : [],
  },
  action
) => {
  switch (action.type) {
    case types.ADD_ITEM_TO_LIBRARY:
      const item = action.payload;

      const isItemExit = state.libItems.find((i) => i.id === item.id);

      if (isItemExit) {
        return {
          ...state,
          libItems: state.libItems.map((i) => {
            return i.id === isItemExit.id ? item : i;
          }),
        };
      } else {
        return {
          ...state,
          libItems: [...state.libItems, item],
        };
      }

    case types.REMOVE_ITEM_FROM_LIBRARY:
      return {
        ...state,
        libItems: state.libItems.filter((i) => i.id !== action.payload),
      };

    default:
      return state;
  }
};
