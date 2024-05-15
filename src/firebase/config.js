import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV0N9EnHQWVWzhPBBPHpSynO0LtcVlmsY",
  authDomain: "next-app-sample-d2ffa.firebaseapp.com",
  projectId: "next-app-sample-d2ffa",
  storageBucket: "next-app-sample-d2ffa.appspot.com",
  messagingSenderId: "1004562085454",
  appId: "1:1004562085454:web:6d0014c015fc114d22351f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;