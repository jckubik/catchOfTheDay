import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAnerbNFp7StWdiYjHNFfQU3UOutkDSfPo",
  authDomain: "catch-of-the-day-jacob-kubik.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jacob-kubik-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;