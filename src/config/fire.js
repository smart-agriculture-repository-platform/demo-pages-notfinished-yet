import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXMpMcFcmFTCv3F7t4zyisu7vbUHYiAe8",
  authDomain: "simple-website-5007b.firebaseapp.com",
  projectId: "simple-website-5007b",
  storageBucket: "simple-website-5007b.appspot.com",
  messagingSenderId: "846873475659",
  appId: "1:846873475659:web:04e13c703d51f72f9eebce"
};



const fire = firebase.initializeApp(firebaseConfig);

export default fire;

export const auth = fire.auth() ;
export const firestore = fire.firestore() ;
export const storage = fire.storage() ;
