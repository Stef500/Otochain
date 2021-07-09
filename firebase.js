// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC3_c4T5KpchMriShYNgwNLH2kkUituid0",
    authDomain: "otochain-f5bbd.firebaseapp.com",
    databaseURL: "https://otochain-f5bbd-default-rtdb.firebaseio.com",
    projectId: "otochain-f5bbd",
    storageBucket: "otochain-f5bbd.appspot.com",
    messagingSenderId: "557582238019",
    appId: "1:557582238019:web:c321c3f98c721af20d6ff6",
    measurementId: "G-C16C1JZSNY"
};

let app; //apps ??
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};