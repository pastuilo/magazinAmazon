import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR8AOi7ZelGmrt6Ju0_JD3vCtd8BcDtHI",
  authDomain: "proiect-ce8a9.firebaseapp.com",
  projectId: "proiect-ce8a9",
  storageBucket: "proiect-ce8a9.appspot.com",
  messagingSenderId: "745986940077",
  appId: "1:745986940077:web:2aba941e29fbb2ce00fa24",
  measurementId: "G-FENDQH99RK",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
