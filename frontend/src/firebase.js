import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  GoogleAuthProvider,
  getAuth,
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

export const db = getFirestore (app);

export const googleAuthProvider = new GoogleAuthProvider();
export const twitterAuthProvider = new TwitterAuthProvider();
