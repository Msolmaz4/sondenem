// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase'
import {getFirestore} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrN4nbp3PwIs0jpIGHkLdm2yyCquU-Xg0",
  authDomain: "digihome-43438.firebaseapp.com",
  projectId: "digihome-43438",
  storageBucket: "digihome-43438.appspot.com",
  messagingSenderId: "471274040075",
  appId: "1:471274040075:web:4588ecfc2f373a3bf5100e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
const db = getFirestore(app);

export {auth,db}