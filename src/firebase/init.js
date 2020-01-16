import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBxgP6QE_SlZKTuDwnexj5ranJcNFk1ypU",
    authDomain: "udemy-geo-ninjas-3ec95.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninjas-3ec95.firebaseio.com",
    projectId: "udemy-geo-ninjas-3ec95",
    storageBucket: "udemy-geo-ninjas-3ec95.appspot.com",
    messagingSenderId: "932760518616",
    appId: "1:932760518616:web:5a11445565e98a7bdd3cad",
    measurementId: "G-SDCJ13P8V5"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  // Export firestore database
  export default firebaseApp.firestore()