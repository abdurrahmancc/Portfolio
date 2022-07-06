import React from "react";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTYSVzFmkN4bsDawJ8mzCjtL8uZ95RFHA",
  authDomain: "my-portfolio-e193c.firebaseapp.com",
  projectId: "my-portfolio-e193c",
  storageBucket: "my-portfolio-e193c.appspot.com",
  messagingSenderId: "437912280608",
  appId: "1:437912280608:web:601996246e2f163ea66645",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
