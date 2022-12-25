//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDK397eW6yXePIrnEZ3-pcuh4XxvY0zugY",
    authDomain: "mockup-4e938.firebaseapp.com",
    projectId: "mockup-4e938",
    storageBucket: "mockup-4e938.appspot.com",
    messagingSenderId: "851679834665",
    appId: "1:851679834665:web:19be405c6853d4b757a238",
    measurementId: "G-FK6Y5HCJ7S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export { db, auth };