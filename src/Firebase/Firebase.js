import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDEAn_WhvzsfxXt97vOXBh0Hb7J9jiGZhA",
  authDomain: "webchat-39b0a.firebaseapp.com",
  projectId: "webchat-39b0a",
  storageBucket: "webchat-39b0a.appspot.com",
  messagingSenderId: "913149934038",
  appId: "1:913149934038:web:a8d8a6eef1aec4c72a0c77",
  measurementId: "G-Q29HVZCXTJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
