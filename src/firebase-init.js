import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxqOqE6PQ7NIIWmV8Yl2OEBY_ggFEJ0kw",
  authDomain: "clone-410504.firebaseapp.com",
  projectId: "gmailclone-410504",
  storageBucket: "gmailclone-410504.appspot.com",
  messagingSenderId: "440220642490",
  appId: "1:440220642490:web:a3cdd670b18318e32ca683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }