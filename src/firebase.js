import firebase from 'firebase/app';
 import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBomLaorrOOA8uyo8BcPIljiQOC97mZWws",
    authDomain: "todoist-tut-2c317.firebaseapp.com",
    databaseURL: "https://todoist-tut-2c317.firebaseio.com",
    projectId: "todoist-tut-2c317",
    storageBucket: "todoist-tut-2c317.appspot.com",
    messagingSenderId: "230387794438",
    appId: "1:230387794438:web:4e9fb4205854cf3b4bb987"
});

export { firebaseConfig as firebase };