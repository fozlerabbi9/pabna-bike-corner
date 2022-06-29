// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTD9CBqcmTcVSsz9fzQcAtgwupsDatFm0",
  authDomain: "pabna-bike-corner.firebaseapp.com",
  projectId: "pabna-bike-corner",
  storageBucket: "pabna-bike-corner.appspot.com",
  messagingSenderId: "1060309127961",
  appId: "1:1060309127961:web:7cb80de108865a36406b88",
  measurementId: "G-Z8S9165KSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;

