// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeTwKUlo8dVj1VbHtEPPpGiKyRPlmAVaw",
  authDomain: "b10a10-e-visa.firebaseapp.com",
  projectId: "b10a10-e-visa",
  storageBucket: "b10a10-e-visa.firebasestorage.app",
  messagingSenderId: "983470758521",
  appId: "1:983470758521:web:c246135f02431ce11f52a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;