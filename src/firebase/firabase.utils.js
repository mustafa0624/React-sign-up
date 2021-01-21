// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";


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

firebase.initializeApp(config)