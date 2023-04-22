// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX4yPX4ixQ9FK48KXd4B8dfXNdLMrA8Sk",
  authDomain: "disease-prognosis.firebaseapp.com",
  projectId: "disease-prognosis",
  storageBucket: "disease-prognosis.appspot.com",
  messagingSenderId: "10654408147",
  appId: "1:10654408147:web:d7ba9fa744ee580914e326"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);