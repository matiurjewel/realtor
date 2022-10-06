// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAYAm4vDDXKsNITo-5f47FxsBbXJAJFax4",
  authDomain: "realtor-clone-b0ea9.firebaseapp.com",
  projectId: "realtor-clone-b0ea9",
  storageBucket: "realtor-clone-b0ea9.appspot.com",
  messagingSenderId: "835562221092",
  appId: "1:835562221092:web:4be44a84e74bc86db032b1",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
