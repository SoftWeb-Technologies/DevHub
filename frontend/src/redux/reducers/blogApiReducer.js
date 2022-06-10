import {
  API_FETCH_DEV_TO_ARTICLES_FAIL,
  API_FETCH_DEV_TO_ARTICLES_START,
  API_FETCH_DEV_TO_ARTICLES_SUCCESS,
  API_FETCH_GITHUB_REPOS_FAIL,
  API_FETCH_GITHUB_REPOS_START,
  API_FETCH_GITHUB_REPOS_SUCCESS,
} from "../contacts/apiActionTypes";

const githubReposInitialState = {
  loading: false,
  error: null,
  githubRepoData: [],
};

export const apiGithubReposReducer = (
  state = githubReposInitialState,
  action
) => {
  switch (action.type) {
    case API_FETCH_GITHUB_REPOS_START:
      return {
        loading: true,
        githubRepoData: [],
      };

    case API_FETCH_GITHUB_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        githubRepoData: action.payload,
      };

    case API_FETCH_GITHUB_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// Dev to article Initial State
const devToArticlesInitialState = {
  loading: false,
  error: null,
  devToArticlesData: [],
};

export const apiDevToArticlesReducer = (
  state = devToArticlesInitialState,
  action
) => {
  switch (action.type) {
    case API_FETCH_DEV_TO_ARTICLES_START:
      return {
        loading: true,
        devToArticlesData: [],
      };

    case API_FETCH_DEV_TO_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        devToArticlesData: action.payload,
      };

    case API_FETCH_DEV_TO_ARTICLES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
