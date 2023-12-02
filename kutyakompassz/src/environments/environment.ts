// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD8yaOb9mwKk9SxRet2KMXOjc0khssqHxE",
        authDomain: "pwa-kutyakompassz.firebaseapp.com",
        projectId: "pwa-kutyakompassz",
        storageBucket: "pwa-kutyakompassz.appspot.com",
        messagingSenderId: "1038043023102",
        appId: "1:1038043023102:web:50475bc1c3c82778fe47af",
        measurementId: "G-W8FESB0R8S"
    }
  };

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);