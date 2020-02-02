import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyDD0btkM2We7PK7NEVFQl72bfTfYT0PbFo",
  authDomain: "project-manager-e3dd0.firebaseapp.com",
  databaseURL: "https://project-manager-e3dd0.firebaseio.com",
  projectId: "project-manager-e3dd0",
  storageBucket: "project-manager-e3dd0.appspot.com",
  messagingSenderId: "688980624783",
  appId: "1:688980624783:web:8bed8a9d94fd1083ae37fa",
  measurementId: "G-GTTF2QQRK3"
};

// Initialize Firebase
firebase.initializeApp(config);
//firebase.analytics();

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
