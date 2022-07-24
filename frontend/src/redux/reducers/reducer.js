import * as types from "../constants/authTypes";

const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOOGLE_SIGN_IN_START":
    case "TWITTER_SIGN_IN_START":
    case types.REGISTER_USER_START:
    case types.LOGIN_USER_START:
    case types.LOAD_USER_START:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case "GOOGLE_SIGN_IN_SUCCESS":
    case "TWITTER_SIGN_IN_SUCCESS":
    case types.REGISTER_USER_SUCCESS:
    case types.LOGIN_USER_SUCCESS:
    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        currentUser: action.payload,
      };

    case "GOOGLE_SIGN_IN_FAIL":
    case "TWITTER_SIGN_IN_FAIL":
    case types.REGISTER_USER_FAIL:
    case types.LOGIN_USER_FAIL:
    case types.LOAD_USER_FAIL:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload,
        isAuthenticated: false,
      };

    case types.LOGOUT_USER_SUCCESS:
      return {
        loading: false,
        currentUser: null,
        isAuthenticated: false,
      };

    case types.LOGOUT_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
