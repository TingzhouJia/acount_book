import * as firebase from 'firebase'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBz3nyk9LnBk75TssD7wY126xLClOORUww",
    authDomain: "shark-bookkeeping.firebaseapp.com",
    databaseURL: "https://shark-bookkeeping.firebaseio.com",
    projectId: "shark-bookkeeping",
    storageBucket: "shark-bookkeeping.appspot.com",
    messagingSenderId: "466113771597",
    appId: "1:466113771597:web:6fc4b4e87dd472d5c60404",
    measurementId: "G-5EQ27GJM1L"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase