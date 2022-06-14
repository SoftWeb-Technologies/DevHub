import {
  API_FETCH_CONTEST_FAIL,
  API_FETCH_CONTEST_START,
  API_FETCH_CONTEST_SUCCESS,
  API_FETCH_NEWS_APPLE_FAIL,
  API_FETCH_NEWS_APPLE_START,
  API_FETCH_NEWS_APPLE_SUCCESS,
  API_FETCH_NEWS_KEYWORD_FAIL,
  API_FETCH_NEWS_KEYWORD_START,
  API_FETCH_NEWS_KEYWORD_SUCCESS,
  API_FETCH_NEWS_TESLA_FAIL,
  API_FETCH_NEWS_TESLA_START,
  API_FETCH_NEWS_TESLA_SUCCESS,
} from "../contacts/apiActionTypes";

const newsAppleInitialState = {
  loading: false,
  error: null,
  newsAppleData: [],
};

export const apiNewsAppleReducer = (state = newsAppleInitialState, action) => {
  switch (action.type) {
    case API_FETCH_NEWS_APPLE_START:
      return {
        loading: true,
        newsAppleData: [],
      };

    case API_FETCH_NEWS_APPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        newsAppleData: action.payload,
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

// news Tesla Initial State

const newsTeslaInitialState = {
  loading: false,
  error: null,
  newsTeslaData: [],
};

export const apiNewsTeslaReducer = (state = newsTeslaInitialState, action) => {
  switch (action.type) {
    case API_FETCH_NEWS_TESLA_START:
      return {
        loading: true,
        newsTeslaData: [],
      };

    case API_FETCH_NEWS_TESLA_SUCCESS:
      return {
        ...state,
        loading: false,
        newsTeslaData: action.payload,
      };

    case API_FETCH_NEWS_TESLA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// keyword news reducer
const newsKeywordInitialState = {
  loading: false,
  error: null,
  newsKeywordData: [],
};

export const apiNewsKeywordReducer = (
  state = newsKeywordInitialState,
  action
) => {
  switch (action.type) {
    case API_FETCH_NEWS_KEYWORD_START:
      return {
        loading: true,
        newsKeywordData: [],
      };

    case API_FETCH_NEWS_KEYWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        newsKeywordData: action.payload,
      };

    case API_FETCH_NEWS_KEYWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// contest reducer
const contestInitialState = {
  loading: false,
  error: null,
  contestData: [],
};

export const apiContestReducer = (state = contestInitialState, action) => {
  switch (action.type) {
    case API_FETCH_CONTEST_START:
      return {
        loading: true,
        contestData: [],
      };

    case API_FETCH_CONTEST_SUCCESS:
      return {
        ...state,
        loading: false,
        contestData: action.payload,
      };

    case API_FETCH_CONTEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
