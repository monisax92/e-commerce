import { initializeApp } from "firebase/app";
import {
  getAuth,
  //   signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

// Initialize authentication object:
export const auth = getAuth();

/***********************
 * Interface layer functions:
 ************************/

//sign IN with email and password:
export const signInWithEmailAndPass = async (email, password) => {
  if (!email || !password) {
    alert("Please fill both fields");
    return;
  }
  return await signInWithEmailAndPassword(auth, email, password);
};

//sign IN with google account:
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

//sign UP with email and password:
export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  console.log(auth, email, password);
  return await createUserWithEmailAndPassword(auth, email, password);
};

//sign OUT:
export const signOutUser = async () => await signOut(auth);

//listener for authentication changes:
export const onAuthStateChangedListener = callback => {
  return onAuthStateChanged(auth, callback);
};

//instanciate database:
export const db = getFirestore();

//create new document with user's data in "users" collection on database:
export const createUserDocFromAuth = async (userAuth, additionalData) => {
  if (!auth) return;

  const userDocInstance = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocInstance);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const creationDate = new Date();

    try {
      await setDoc(userDocInstance, {
        displayName,
        email,
        //we don't store passwords in db
        creationDate,
        ...additionalData //spreading object of additional data like displayName (not needed for google as it knows user's name itself)
      });
    } catch (error) {
      if (error.code == "auth/email-already-in-use")
        console.log("User for this email already exists!");
      else console.log("User could not be added to database", error.message);
    }
  }
  return userDocInstance;
};
