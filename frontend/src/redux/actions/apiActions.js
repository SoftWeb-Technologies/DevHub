import axios from "axios";
import * as types from "../contacts/apiActionTypes";

export const fetchNewsAppleData = () => async (dispatch) => {
  try {
    dispatch({ type: types.API_FETCH_NEWS_APPLE_START });

    const { data } = await axios.get("http://localhost:4000/api/news-apple");
    console.log(data);

    dispatch({ type: types.API_FETCH_NEWS_APPLE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: types.API_FETCH_NEWS_APPLE_FAIL,
      payload: err.response.data.message,
    });
  }
};
