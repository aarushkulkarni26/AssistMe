import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

firebase.initializeApp({
  apiKey: "AIzaSyDSnFVMPT1ME_c_kYEUYg46KLtj1vcKwFU",
  authDomain: "quellie-hacks.firebaseapp.com",
  projectId: "quellie-hacks",
  storageBucket: "quellie-hacks.appspot.com",
  messagingSenderId: "475942591251",
  appId: "1:475942591251:web:9f0f6862cbdb865e2218e6",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();
export default firebase;
