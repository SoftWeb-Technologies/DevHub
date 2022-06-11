import {
  ADD_ITEM_TO_LIBRARY,
  REMOVE_ITEM_FROM_LIBRARY,
} from "../contacts/libActionTypes";

export const addItemsToLibrary =
  (id, items, isAddedToLib) => (dispatch, getState) => {
    dispatch({
      type: ADD_ITEM_TO_LIBRARY,
      payload: {
        id,
        title: items.title,
        description: items.description,
        published_at: items.published_at,
        url: items.url,
        social_image: items.social_image,
        bookmark: isAddedToLib,
      },
    });

    // storing data in local storage
    localStorage.setItem("libItems", JSON.stringify(getState().lib.libItems));
  };

export const removeItemFromLibrary = (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_ITEM_FROM_LIBRARY, payload: id });

  localStorage.setItem("libItems", JSON.stringify(getState().lib.libItems));
};
