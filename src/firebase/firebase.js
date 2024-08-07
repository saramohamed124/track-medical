import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAYODWYRkXGyvYUq4a_DK5NuTesgjM2Wzc",
  authDomain: "otp-app-720da.firebaseapp.com",
  projectId: "otp-app-720da",
  storageBucket: "otp-app-720da.appspot.com",
  messagingSenderId: "265790762397",
  appId: "1:265790762397:web:09d9564c5af6dc64a49374"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)