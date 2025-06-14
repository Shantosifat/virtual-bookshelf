// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXIDg998paCgc_rKjJZuaH2A90Y8wliyY",
  authDomain: "virtual-bookshelf-87634.firebaseapp.com",
  projectId: "virtual-bookshelf-87634",
  storageBucket: "virtual-bookshelf-87634.firebasestorage.app",
  messagingSenderId: "267457124901",
  appId: "1:267457124901:web:94ca287d469d7347497dcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;