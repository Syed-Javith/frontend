// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc_KWsAxbS1z0_LbFfGuE1rtkFh4FSZE4",
  authDomain: "task-cd0c7-a5ab6.firebaseapp.com",
  projectId: "task-cd0c7",
  storageBucket: "task-cd0c7.appspot.com",
  messagingSenderId: "23286430026",
  appId: "1:23286430026:web:4587e18dac44aa390c29b3",
  measurementId: "G-TKLRZ96ZPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();