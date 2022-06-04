import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfjR4L_uDLTJJD3gumeQICZtUrsn2l7Cc",
  authDomain: "devhub-auth.firebaseapp.com",
  projectId: "devhub-auth",
  storageBucket: "devhub-auth.appspot.com",
  messagingSenderId: "640796224144",
  appId: "1:640796224144:web:01007d5b4dc083308c8615",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export const signInWithGoogle = (e) => {
  e.preventDefault();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signInWithTwitter = (e) => {
  e.preventDefault();

  signInWithPopup(auth, twitterProvider)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
