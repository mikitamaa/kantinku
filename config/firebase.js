// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdeUVNPK1e9KL4LUkSACz4l6jZtarzDho",
  authDomain: "kantinku-e07fb.firebaseapp.com",
  projectId: "kantinku-e07fb",
  storageBucket: "kantinku-e07fb.appspot.com",
  messagingSenderId: "386292932120",
  appId: "1:386292932120:web:9f612a3451c1c0d32ced6d",
  measurementId: "G-7J5H1Q5ECT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


const analytics = getAnalytics(app);