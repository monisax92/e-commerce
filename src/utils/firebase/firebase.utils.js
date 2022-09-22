import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

/***********************
 * Firebase setup:
 ************************/
const firebaseConfig = {
  apiKey: "AIzaSyBrAqyjFB2wP-TkXyimotyaqKbZX3ISKVY",
  authDomain: "funbuy-db.firebaseapp.com",
  projectId: "funbuy-db",
  storageBucket: "funbuy-db.appspot.com",
  messagingSenderId: "1017812122098",
  appId: "1:1017812122098:web:bfa016a2b0e006ac11136b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/***********************
 * Authentication setup:
 ************************/
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
