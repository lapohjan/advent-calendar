import firebase from 'firebase';
import 'firebase/firestore';
const config = {
    apiKey: "AIzaSyDJXaZK5KClNmno-FZGf8TI7TRFkggdoQY",
    authDomain: "my-advent-calendar.firebaseapp.com",
    databaseURL: "https://my-advent-calendar.firebaseio.com",
    projectId: "my-advent-calendar",
    storageBucket: "my-advent-calendar.appspot.com",
    messagingSenderId: "620045436717",
    appId: "1:620045436717:web:ed7875a4097839635df5a4",
    measurementId: "G-CQVEL7J55T"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();
export default firebase;