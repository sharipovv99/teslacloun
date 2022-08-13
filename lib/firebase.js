import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCHPi4n8PCN0-pMWKYh-ZHQlFjQ6sofkho",
    authDomain: "teslaclone-114a6.firebaseapp.com",
    projectId: "teslaclone-114a6",
    storageBucket: "teslaclone-114a6.appspot.com",
    messagingSenderId: "67180700890",
    appId: "1:67180700890:web:2710ca71de690548a171e3",
    measurementId: "G-BT2W946GXR"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;