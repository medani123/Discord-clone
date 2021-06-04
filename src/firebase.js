import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsr-v8m2-bjBs3_ENaL9ur54umCrjSUJA",
  authDomain: "discord-23dd5.firebaseapp.com",
  projectId: "discord-23dd5",
  storageBucket: "discord-23dd5.appspot.com",
  messagingSenderId: "948871863254",
  appId: "1:948871863254:web:48abf61f3f26b74acd6277",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
