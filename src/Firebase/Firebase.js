import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyATn5s8p5qW2Sgalzgey0GdXQI0pBCVrn8",
  authDomain: "chat-app-282fe.firebaseapp.com",
  projectId: "chat-app-282fe",
  storageBucket: "chat-app-282fe.appspot.com",
  messagingSenderId: "681253196065",
  appId: "1:681253196065:web:f0baaa57e317ab297fee60",
  measurementId: "G-7E6KHTTYXB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
