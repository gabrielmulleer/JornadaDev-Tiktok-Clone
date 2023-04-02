// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkdV3RfcASdEMO7fOt3-MCmRg16XoRn28",
  authDomain: "tiktok---jornada-e9302.firebaseapp.com",
  projectId: "tiktok---jornada-e9302",
  storageBucket: "tiktok---jornada-e9302.appspot.com",
  messagingSenderId: "988196179455",
  appId: "1:988196179455:web:abe8b192b3e40d39a12bca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
