// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-CuQ42NWH65CC9EUilUTmtIWudhaxsX0",
  authDomain: "react-private-router-92651.firebaseapp.com",
  projectId: "react-private-router-92651",
  storageBucket: "react-private-router-92651.firebasestorage.app",
  messagingSenderId: "533302560987",
  appId: "1:533302560987:web:e6b8951a7599e9d03ae4fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);