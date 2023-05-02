// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnSREY154WfyNfLtdckU26PO5aLWFL94M",
  authDomain: "assignment-10-chef-hunter.firebaseapp.com",
  projectId: "assignment-10-chef-hunter",
  storageBucket: "assignment-10-chef-hunter.appspot.com",
  messagingSenderId: "873859684573",
  appId: "1:873859684573:web:5f4910c25a95c32e5fa334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;