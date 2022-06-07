import {
  API_FETCH_NEWS_APPLE_FAIL,
  API_FETCH_NEWS_APPLE_START,
  API_FETCH_NEWS_APPLE_SUCCESS,
} from "../contacts/apiActionTypes";

const APIinitialState = {
  loading: false,
  error: null,
  data: [],
};

export const apiReducer = (state = APIinitialState, action) => {
  switch (action.type) {
    case API_FETCH_NEWS_APPLE_START:
      return {
        loading: true,
        data: [],
      };

    case API_FETCH_NEWS_APPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case API_FETCH_NEWS_APPLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
