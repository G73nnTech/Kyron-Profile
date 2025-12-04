// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvlx28G52O7npdS_eL47ndDtVc7XA6fNk",
  authDomain: "kyron-evangelista-portfolio.firebaseapp.com",
  projectId: "kyron-evangelista-portfolio",
  storageBucket: "kyron-evangelista-portfolio.firebasestorage.app",
  messagingSenderId: "664212348470",
  appId: "1:664212348470:web:8a4c57aaba0e2faa8fc297",
  measurementId: "G-SPT8KQJRDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };