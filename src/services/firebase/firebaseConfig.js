import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDFMZ2rAe3xEuh96FVkNgrE1g6J3ULoiyo",
  authDomain: "tiendamugarg-react.firebaseapp.com",
  projectId: "tiendamugarg-react",
  storageBucket: "tiendamugarg-react.appspot.com",
  messagingSenderId: "921767029356",
  appId: "1:921767029356:web:61b84625fa2c3ccf39c649"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)