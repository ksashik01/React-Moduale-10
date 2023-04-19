// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO-tXrW7EqRzWHBykinF4kNjdaNFf94hY",
  authDomain: "email-password-auth-91c5f.firebaseapp.com",
  projectId: "email-password-auth-91c5f",
  storageBucket: "email-password-auth-91c5f.appspot.com",
  messagingSenderId: "451305338659",
  appId: "1:451305338659:web:49601bb1a966cfc9153e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app