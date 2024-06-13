// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWQ2WeGZ7kuMZcKAs4W7p_uUePViHkV8Q",
  authDomain: "pokeproject-a5b0f.firebaseapp.com",
  projectId: "pokeproject-a5b0f",
  storageBucket: "pokeproject-a5b0f.appspot.com",
  messagingSenderId: "86266459259",
  appId: "1:86266459259:web:991cc0913cfe2df5e19ede"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
console.log(db);
