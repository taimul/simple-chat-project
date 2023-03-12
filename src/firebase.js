import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCusi_bIps_qWtU--Hdyrcg7jg0m4boTV8",
  authDomain: "chat-f6b33.firebaseapp.com",
  projectId: "chat-f6b33",
  storageBucket: "chat-f6b33.appspot.com",
  messagingSenderId: "279730702609",
  appId: "1:279730702609:web:d6b45ce7f83f1d44a3a4b0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
