import {
    ADD_ITEM_TO_REMINDER,
    REMOVE_ITEM_FROM_REMINDER,
} from "../constants/ReminderActionTypes";

export const addItemsToReminder =
    (id, items, isAddedToReminder) => (dispatch, getState) => {
        dispatch({
            type: ADD_ITEM_TO_REMINDER,
            payload: {
                id,
                title: items.title,
                description: items.description,
                published_at: items.published_at,
                url: items.url,
                bookmark: isAddedToReminder,
            },
        });

        // storing data in local storage
        localStorage.setItem("reminderItems", JSON.stringify(getState().reminder.reminderItems));
    }

    export const removeItemFromLibrary = (id) => (dispatch, getState) => {
        dispatch({ type: REMOVE_ITEM_FROM_REMINDER, payload: id });

        localStorage.setItem("libItems", JSON.stringify(getState().lib.libItems));
    }