import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDTs28zIrRgpnyj6XEbd_MpEA67xJac7LI",
    authDomain: "p-67-8e08c.firebaseapp.com",
    databaseURL: "https://p-67-8e08c-default-rtdb.firebaseio.com",
    projectId: "p-67-8e08c",
    storageBucket: "p-67-8e08c.appspot.com",
    messagingSenderId: "243902704167",
    appId: "1:243902704167:web:408aa046586fe767b87c02"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();