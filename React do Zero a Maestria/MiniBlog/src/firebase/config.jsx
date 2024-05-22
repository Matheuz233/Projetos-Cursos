import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjBnSYWL6UH7FuvuieYjzbi05GYszT4Qg",
  authDomain: "miniblog-8dd22.firebaseapp.com",
  projectId: "miniblog-8dd22",
  storageBucket: "miniblog-8dd22.appspot.com",
  messagingSenderId: "240991726295",
  appId: "1:240991726295:web:d17a0be34934c1c9355e92",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
