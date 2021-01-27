import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBSBDSNkJ6jcDSHGPrPqDDxCP7NHoG0B4Q",
  authDomain: "willi-app-712db.firebaseapp.com",
  projectId: "willi-app-712db",
  storageBucket: "willi-app-712db.appspot.com",
  messagingSenderId: "389326970415",
  appId: "1:389326970415:web:8144cb52d050d8278130da"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
