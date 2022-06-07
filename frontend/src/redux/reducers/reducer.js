const initialState = {
  loading: false,
  currentUser: null,
  isAuthenticated: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_START":
    case "LOGIN_START":
    case "LOGOUT_START":
    case "GOOGLE_SIGN_IN_START":
    case "TWITTER_SIGN_IN_START":
      return {
        loading: true,
        isAuthenticated: false,
      };

    case "SET_USER":
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        isAuthenticated: true,
      };

    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
    case "GOOGLE_SIGN_IN_SUCCESS":
    case "TWITTER_SIGN_IN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        currentUser: action.payload,
      };

    case "LOGOUT_SUCCESS":
      return {
        loading: false,
        currentUser: null,
        isAuthenticated: false,
      };

    case "REGISTER_FAIL":
    case "LOGIN_FAIL":
    case "GOOGLE_SIGN_IN_FAIL":
    case "TWITTER_SIGN_IN_FAIL":
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload,
        isAuthenticated: false,
      };

    case "LOGOUT_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
