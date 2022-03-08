// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBGVxfsVzvLEgmIOw7AffCAEarcPauwvvs",
    authDomain: "clone-84264.firebaseapp.com",
    projectId: "clone-84264",
    storageBucket: "clone-84264.appspot.com",
    messagingSenderId: "373932015552",
    appId: "1:373932015552:web:166dfc326695cb5504d225"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };