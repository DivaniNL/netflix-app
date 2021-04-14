
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
var firebaseConfig = {
    apiKey: "AIzaSyDCaJsu-NEB9aM4AP2cpYApWq1tONfmD4o",
    authDomain: "netflix-clone-8581c.firebaseapp.com",
    projectId: "netflix-clone-8581c",
    storageBucket: "netflix-clone-8581c.appspot.com",
    messagingSenderId: "553913913309",
    appId: "1:553913913309:web:432f7f04026041f224b034",
    measurementId: "G-G33JRZJ0S1"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)

}
export const auth = firebase.auth();
export const storage = firebase.storage();
// export const db = app.database();
export default firebase;