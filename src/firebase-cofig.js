// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXVWouMdn-f4EaQAKo5G9V-kr7kbuqt-Y",
  authDomain: "coffee-server-cc291.firebaseapp.com",
  projectId: "coffee-server-cc291",
  storageBucket: "coffee-server-cc291.firebasestorage.app",
  messagingSenderId: "763255366065",
  appId: "1:763255366065:web:15f23e32bc979e597add90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)