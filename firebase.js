// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAysNWFeZtP_erUScEOPNW33L_-_UO6OZc",
  authDomain: "fir-auth-f316b.firebaseapp.com",
  projectId: "fir-auth-f316b",
  storageBucket: "fir-auth-f316b.appspot.com",
  messagingSenderId: "297249890357",
  appId: "1:297249890357:web:fd9d8f4ca91baf563f117c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth()

export {auth};