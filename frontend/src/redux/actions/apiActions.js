import axios from "axios";
import * as types from "../contacts/apiActionTypes";

export const fetchNewsAppleData = () => async (dispatch) => {
  try {
    dispatch({ type: types.API_FETCH_NEWS_APPLE_START });

    const { data } = await axios.get("/api/news-apple");

    dispatch({ type: types.API_FETCH_NEWS_APPLE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: types.API_FETCH_NEWS_APPLE_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const fetchNewsTeslaData = () => async (dispatch) => {
  try {
    dispatch({ type: types.API_FETCH_NEWS_TESLA_START });

    const { data } = await axios.get("/api/news-tesla");

    dispatch({ type: types.API_FETCH_NEWS_TESLA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: types.API_FETCH_NEWS_TESLA_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const fetchNewsKeywordData = () => async (dispatch) => {
  try {
    dispatch({ type: types.API_FETCH_NEWS_KEYWORD_START });

    const { data } = await axios.get("/api/news-keyword");

    dispatch({ type: types.API_FETCH_NEWS_KEYWORD_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: types.API_FETCH_NEWS_KEYWORD_FAIL,
      payload: err.response.data.message,
    });
  }
};
