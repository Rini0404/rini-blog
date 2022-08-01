import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCj9XwcPVDm8jNvHDLyKiy4aBjTgRfdgA",
  authDomain: "rini-blog.firebaseapp.com",
  projectId: "rini-blog",
  storageBucket: "rini-blog.appspot.com",
  messagingSenderId: "621902425333",
  appId: "1:621902425333:web:639cbbc77bf24128a329bc",
  measurementId: "G-95CEEHPJHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();