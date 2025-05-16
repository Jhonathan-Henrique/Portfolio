import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

// Substitua aqui com seu config
const firebaseConfig = {
  apiKey: "AIzaSyDg2zxKIwbmU-3F6_IeWLQWoyIwVY8-UUg",
  authDomain: "portfolio-6850f.firebaseapp.com",
  projectId: "portfolio-6850f",
  storageBucket: "portfolio-6850f.firebasestorage.app",
  messagingSenderId: "283092085030",
  appId: "1:283092085030:web:dc405ee55566cda5ac39e7",
  measurementId: "G-LLF25NZ4CG"
};

// Initialize with a unique name (pode tirar o segundo parâmetro se não precisar)
const app = initializeApp(firebaseConfig, 'comments-app'); // ou só initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
