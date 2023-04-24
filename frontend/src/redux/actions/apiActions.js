import axios from "axios";
import * as types from "../constants/apiActionTypes";

export const fetchTopHeadLinesNews = () => async (dispatch) => {
  try {
    dispatch({ type: types.API_FETCH_TECH_HUNT_START });

    // need to secure this api key
    const API_KEY = "0f996e2478b54bbb97086eff0af0896b";

    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
    );

    dispatch({ type: types.API_FETCH_TECH_HUNT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: types.API_FETCH_TECH_HUNT_FAIL,
      payload: err.response.data.message,
    });
  }
};

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

    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY_NEWS}`
    );

    dispatch({
      type: types.API_FETCH_NEWS_TESLA_SUCCESS,
      payload: data.articles,
    });
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

// blogs api fetching
export const fetchGithubReposData = () => async (dispatch) => {
  try {
    dispatch({ type: types.API_FETCH_GITHUB_REPOS_START });

    const { data } = await axios.get(
      "https://gtrend.yapie.me/repositories?since=daily"
    );

    console.log(data);

    dispatch({ type: types.API_FETCH_GITHUB_REPOS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: types.API_FETCH_GITHUB_REPOS_FAIL,
      payload: err.response.data.message,
    });
  }
};

// dev to articles api fetching
export const fetchDevToArticlesData = () => async (dispatch) => {
  try {
    dispatch({ type: types.API_FETCH_DEV_TO_ARTICLES_START });

    const { data } = await axios.get("https://dev.to/api/articles");

    dispatch({ type: types.API_FETCH_DEV_TO_ARTICLES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: types.API_FETCH_DEV_TO_ARTICLES_FAIL,
      payload: err.response.data.message,
    });
  }
};

// contest api fetching
export const fetchContestData = () => async (dispatch) => {
  try {
    dispatch({ type: types.API_FETCH_CONTEST_START });

    const { data } = await axios.get("https://kontests.net/api/v1/all");
    // console.log(data);

    dispatch({ type: types.API_FETCH_CONTEST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: types.API_FETCH_CONTEST_FAIL,
      payload: err.response.data.message,
    });
  }
};
