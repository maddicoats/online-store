import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbWfU3lHv9nwjl5u0xoEIjCcACkOAH0hw",
  authDomain: "sword-cart-online.firebaseapp.com",
  projectId: "sword-cart-online",
  storageBucket: "sword-cart-online.appspot.com",
  messagingSenderId: "546615614368",
  appId: "1:546615614368:web:36fad44c21b449f7ce62c5"
};
firebase.initializeApp(firebaseConfig)
//initialise out firebase:
const firestore = firebase.firestore()
export default firestore;
