// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt2wGU5Mh5hV4rsxEjC5uNZnPS98z1J90",
  authDomain: "admin-panel-7e87c.firebaseapp.com",
  projectId: "admin-panel-7e87c",
  storageBucket: "admin-panel-7e87c.firebasestorage.app",
  messagingSenderId: "455134162698",
  appId: "1:455134162698:web:d24061511d7b7367e3d4f3",
  measurementId: "G-RYTQGEYDDN",
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
