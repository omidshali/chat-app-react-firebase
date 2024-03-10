// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqOiABE0WK01GJXtUY720LBkp5keHdb8A",
  authDomain: "chat-app-react-5db45.firebaseapp.com",
  projectId: "chat-app-react-5db45",
  storageBucket: "chat-app-react-5db45.appspot.com",
  messagingSenderId: "278319327149",
  appId: "1:278319327149:web:58548b681ec5cfa64ea324",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
