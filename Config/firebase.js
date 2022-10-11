// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPs6iMnFA9E4Ov9KoHtE1GUZd226QVls0",
  authDomain: "resturantfoodpalace.firebaseapp.com",
  projectId: "resturantfoodpalace",
  storageBucket: "resturantfoodpalace.appspot.com",
  messagingSenderId: "348250729851",
  appId: "1:348250729851:web:a1ddfdfec44cf8fc0221de",
  measurementId: "G-8DR123KR9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);