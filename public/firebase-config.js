// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMTVMWYYgoZvf3a4sCWvJN7rz1i_QTB0c",
  authDomain: "ml-infotech.firebaseapp.com",
  projectId: "ml-infotech",
  storageBucket: "ml-infotech.firebasestorage.app",
  messagingSenderId: "171012215736",
  appId: "1:171012215736:web:77b987790f18e560ae354d",
  measurementId: "G-CEBZBBL7D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);