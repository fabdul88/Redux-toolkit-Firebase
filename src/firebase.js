import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

// // giving access to Firebase Database
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID,
};

// initializing firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// connecting firebase firestore Database
const db = firebaseApp.firestore();

// firebase authentication to log in and log out
const auth = firebase.auth();

// Google authentication
const provider = new firebase.auth.GoogleAuthProvider();

// Firebase storage
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
