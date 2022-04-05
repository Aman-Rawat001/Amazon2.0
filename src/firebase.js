// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpaml0qBXd0JRVlC3Le9MiodzLvqG6OQY",
  authDomain: "reduxestore.firebaseapp.com",
  projectId: "reduxestore",
  storageBucket: "reduxestore.appspot.com",
  messagingSenderId: "1037429710088",
  appId: "1:1037429710088:web:cb49ea8ee4f363f1f1a0bd",
  measurementId: "G-BX0V91945Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
