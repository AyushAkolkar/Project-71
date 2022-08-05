import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD3I1J5yB5cknhU4rK9pqyUYU89_fspqvQ",
    authDomain: "project-71-39948.firebaseapp.com",
    projectId: "project-71-39948",
    storageBucket: "project-71-39948.appspot.com",
    messagingSenderId: "384682982701",
    appId: "1:384682982701:web:4f5dc76299b7bab710e7a4"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
