import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2m_kZRI3MqBo__JTZCm19C9U5SbXlBFI",
    authDomain: "pinoystream-80f4e.firebaseapp.com",
    databaseURL: "https://pinoystream-80f4e.firebaseio.com",
    projectId: "pinoystream-80f4e",
    storageBucket: "pinoystream-80f4e.appspot.com",
    messagingSenderId: "49004764682",
    appId: "1:49004764682:web:4169421068572c90b0c9f3",
    measurementId: "G-PYB0MM6BX6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}