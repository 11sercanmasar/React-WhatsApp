import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA3mC7VPdYYvSJJRydcg2hJsmlK93qsu64",
  authDomain: "whatsapp-clone-d88f7.firebaseapp.com",
  projectId: "whatsapp-clone-d88f7",
  storageBucket: "whatsapp-clone-d88f7.appspot.com",
  messagingSenderId: "902836427043",
  appId: "1:902836427043:web:9c5cbbe35a816447b75496",
  measurementId: "G-VQXQSNS0J3"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;