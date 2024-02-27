// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdyyfkxBvs7jSGKRnwT4QeQ758xOGZyUQ",
  authDomain: "netflix-gpt-624ed.firebaseapp.com",
  projectId: "netflix-gpt-624ed",
  storageBucket: "netflix-gpt-624ed.appspot.com",
  messagingSenderId: "56648240012",
  appId: "1:56648240012:web:e88b31b378d3eaff6f64a9",
  measurementId: "G-SD1E4ZCR48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();