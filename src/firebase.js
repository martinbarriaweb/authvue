import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUdswUZLJ8Znq4TmUtisMpUOKbwzN--ek",
  authDomain: "authvue-a917c.firebaseapp.com",
  databaseURL: "https://authvue-a917c.firebaseio.com",
  projectId: "authvue-a917c",
  storageBucket: "authvue-a917c.appspot.com",
  messagingSenderId: "991167264428",
  appId: "1:991167264428:web:a0cedd9357823b86c75109",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
