import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDOHqCfTZ8TjSlESotSe4lmXSF3a6cJHwI",
    authDomain: "vaccine-store-db.firebaseapp.com",
    databaseURL: "https://vaccine-store-db.firebaseio.com",
    projectId: "vaccine-store-db",
    storageBucket: "vaccine-store-db.appspot.com",
    messagingSenderId: "303241079357",
    appId: "1:303241079357:web:5866f40fd6d60104b01854"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;