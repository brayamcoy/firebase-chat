import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-8708b.firebaseapp.com",
  projectId: "chat-8708b",
  storageBucket: "chat-8708b.appspot.com",
  messagingSenderId: "649569249777",
  appId: "1:649569249777:web:c52b395d9a87b10fe7fc50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
