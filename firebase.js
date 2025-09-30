// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTgHr0w3bjsc-mJQpYi9aG-6Blodx8N6Y",
  authDomain: "signup-2f0aa.firebaseapp.com",
  projectId: "signup-2f0aa",
  storageBucket: "signup-2f0aa.firebasestorage.app",
  messagingSenderId: "133067690171",
  appId: "1:133067690171:web:44d73a4651dd29f738599e",
  measurementId: "G-35C9C5WC6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);