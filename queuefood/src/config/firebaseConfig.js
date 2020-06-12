import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAB4e3q5tPRK97f6RWqBHVCCOPR8id7plo",
    authDomain: "queuefood-9a695.firebaseapp.com",
    databaseURL: "https://queuefood-9a695.firebaseio.com",
    projectId: "queuefood-9a695",
    storageBucket: "queuefood-9a695.appspot.com",
    messagingSenderId: "872918804310",
    appId: "1:872918804310:web:0147bc3ec788ff26ddd8f7",
    measurementId: "G-SXR7Y7612W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebase