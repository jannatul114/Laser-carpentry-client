// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4GPfX1wi9WrEf_y1YEnygdRkbvBlWKDI",
    authDomain: "jenelix-manufecturer.firebaseapp.com",
    projectId: "jenelix-manufecturer",
    storageBucket: "jenelix-manufecturer.appspot.com",
    messagingSenderId: "486287538984",
    appId: "1:486287538984:web:7e30876450e693283eee1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
