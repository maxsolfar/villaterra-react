// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBToHXbUHHHzyumCDHvs6j5liyGoNe0N4k",
  authDomain: "villa-terra-app.firebaseapp.com",
  projectId: "villa-terra-app",
  storageBucket: "villa-terra-app.appspot.com",
  messagingSenderId: "984679336926",
  appId: "1:984679336926:web:01b4f8d37cba1a47632b4f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();