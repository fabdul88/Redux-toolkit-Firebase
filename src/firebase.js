import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

// giving access to Firebase Database
const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
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
