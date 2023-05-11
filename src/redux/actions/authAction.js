import axios from "axios";
import * as types from "./../constants/authTypes";

// register User using Mongodb API
export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_USER_START });
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      "/api/user/register",
      {
        name,
        email,
        password,
      },
      config
    );

    localStorage.setItem("isAuthenticated", true);

    dispatch({ type: types.REGISTER_USER_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.REGISTER_USER_FAIL, payload: err.response.data });
  }
};

// login user using Mongodb API
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_USER_START });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/user/login`,
      { email, password },
      config
    );

    localStorage.setItem("isAuthenticated", true);

    dispatch({ type: types.LOGIN_USER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: types.LOGIN_USER_FAIL, payload: err.response.data });
  }
};

// logout user using Mongodb API
export const logoutUser = () => async (dispatch) => {
  try {
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/logout`);

    dispatch({ type: types.LOGOUT_USER_SUCCESS });
  } catch (err) {
    dispatch({ type: types.LOGOUT_USER_FAIL, payload: err.response.data });
  }
};

// get user profile using Mongodb API
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: types.LOAD_USER_START });

    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/user/me`
    );

    dispatch({ type: types.LOAD_USER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: types.LOAD_USER_FAIL, payload: err.response.data });
  }
};
