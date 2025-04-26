// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; // Firestore'u import ettik

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQQnftyLAQe4XzgLlNR8RmgzJhcmFjlQg",
  authDomain: "react-chat-f7836.firebaseapp.com",
  projectId: "react-chat-f7836",
  storageBucket: "react-chat-f7836.firebasestorage.com",
  messagingSenderId: "716530849232",
  appId: "1:716530849232:web:1e1a2f8f6854ba8b6b55d5",
  measurementId: "G-K7KQFLWJSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore'u initialize ediyoruz
const db = getFirestore(app);

export { db };  // db'yi dışarıya aktarıyoruz
// Burada auth nesnemizi oluşturuyoruz
export const auth = getAuth(app);