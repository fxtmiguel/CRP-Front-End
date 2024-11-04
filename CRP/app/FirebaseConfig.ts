// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import { getFirestore} from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfqK5vsWLxvlFJuO6wYta2KCuh6xYQXHs",
  authDomain: "career-readiness-program.firebaseapp.com",
  projectId: "career-readiness-program",
  storageBucket: "career-readiness-program.appspot.com",
  messagingSenderId: "291284768047",
  appId: "1:291284768047:web:fc115ef3aedf4f59137dda",
  measurementId: "G-V71PNMY01V",
};


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(FIREBASE_APP);
export { db };
