import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyBJCLsq-qRZCK4i2FtOqTanIvtxK2JzRXQ",
    authDomain: "https://reminder-app-3838e.firebaseapp.com",
    databaseURL: "https://reminder-app-3838e.firebaseio.com",
    projectId: "reminder-app-3838e",
    storageBucket: "reminder-app-3838e.appspot.com",
    messagingSenderId: "1023743579196",
    appId: "1:1023743579196:web:de07467fc44476c9345f39",
    measurementId: "G-HHXF8348ZZ"
};
firebase.initializeApp(config);
export default firebase;