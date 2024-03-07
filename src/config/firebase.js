// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbCfpIzBQnlDTwR88PCQtNgrGvr68Ko6c",
  authDomain: "kj-eats.firebaseapp.com",
  projectId: "kj-eats",
  storageBucket: "kj-eats.appspot.com",
  messagingSenderId: "1081340967266",
  appId: "1:1081340967266:web:334f7e39ab414b55c8d43b",
  measurementId: "G-7LSG0394Q8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, auth, googleProvider, db };
