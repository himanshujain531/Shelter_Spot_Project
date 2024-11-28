// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-property-5c7b9.firebaseapp.com",
  projectId: "mern-property-5c7b9",
  storageBucket: "mern-property-5c7b9.appspot.com",
  messagingSenderId: "18211990719",
  appId: "1:18211990719:web:61d79c402a006c013cea0a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);