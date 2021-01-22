// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";
import "firebase/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const devConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const proConfig = {}

const config = process.env.NODE_ENV === "development" ? devConfig : proConfig

class Firebase{
    constructor(){
        firebase.initializeApp(config)
        this.firebaseAuth = firebase.auth()
    }

    register(email,password){
        this.firebaseAuth.createUserWithEmailAndPassword(email,password)

    }

    useGoogleProvider(){
       const googleProvider = new firebase.auth.GoogleAuthProvider();
       googleProvider.setCustomParameters({promt:"select_account"})
       this.firebaseAuth.signInWithPopup(googleProvider)
    }
}

export default new Firebase()

