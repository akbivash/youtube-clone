import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "clone-e1b0c.firebaseapp.com",
  projectId: "clone-e1b0c",
  storageBucket: "clone-e1b0c.appspot.com",
  messagingSenderId: "875910306492",
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: "G-KYGJM4QJQB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth() 
export var provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
});

provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")