// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfDw6NQzliAMAqre-usjsQ-qBUB4Q-TXA",
  authDomain: "ncnc-fc5f2.firebaseapp.com",
  projectId: "ncnc-fc5f2",
  storageBucket: "ncnc-fc5f2.appspot.com",
  messagingSenderId: "708222963860",
  appId: "1:708222963860:web:578790a8d413574519e481",
  measurementId: "G-WQC32KCRL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export { auth, provider };