// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs-84cp3cX1z5f4UghnFABWaT2aj3ouP0",
  authDomain: "blog-mern-227be.firebaseapp.com",
  projectId: "blog-mern-227be",
  storageBucket: "blog-mern-227be.appspot.com",
  messagingSenderId: "520253969790",
  appId: "1:520253969790:web:8e5a12bcc321ed2bdf4f2f",
  measurementId: "G-TWENXC8JV2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export  const analytics = getAnalytics(app);
export const storage = getStorage(app);