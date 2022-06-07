import { auth, googleAuthProvider, twitterAuthProvider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import * as types from "../contacts/actionTypes";

// register actions
const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        user.displayName = displayName;
        dispatch(registerSuccess(user));
      })
      .catch((err) => {
        dispatch(registerFail(err));
      });
  };
};

// login actions
const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = user.displayName || user.email.split("@")[0];
        dispatch(loginSuccess(userCredential.user));
      })
      .catch((err) => {
        dispatch(loginFail(err));
      });
  };
};

// logout actions
const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());

    auth
      .signOut()
      .then(() => {
        dispatch(logoutSuccess());
      })
      .catch((err) => {
        dispatch(logoutFail(err));
      });
  };
};

// set user actions

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

// google sign in actions
const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) => ({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

const googleSignInFail = (error) => ({
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

export const googleSignInInitiate = () => {
  return function (dispatch) {
    dispatch(googleSignInStart());

    signInWithPopup(auth, googleAuthProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = user.displayName || user.email.split("@")[0];
        dispatch(googleSignInSuccess(user));
      })
      .catch((err) => {
        dispatch(googleSignInFail(err));
      });
  };
};

// twitter sign in actions
const twitterSignInStart = () => ({
  type: types.TWITTER_SIGN_IN_START,
});

const twitterSignInSuccess = (user) => ({
  type: types.TWITTER_SIGN_IN_SUCCESS,
  payload: user,
});

const twitterSignInFail = (error) => ({
  type: types.TWITTER_SIGN_IN_FAIL,
  payload: error,
});

export const twitterSignInInitiate = () => {
  return function (dispatch) {
    dispatch(twitterSignInStart());

    signInWithPopup(auth, twitterAuthProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = user.displayName || user.email.split("@")[0];
        dispatch(twitterSignInSuccess(user));
      })
      .catch((err) => {
        dispatch(twitterSignInFail(err));
      });
  };
};