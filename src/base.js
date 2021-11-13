// import firebase from "firebase";
import firebase from "firebase";
import "firebase/storage"

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBkQEH_9TUhXWgjalA6HbkFih-A0t9pT7I",
  authDomain: "wtc-realtime-chatapp-reactjs.firebaseapp.com",
  databaseURL: "https://wtc-realtime-chatapp-reactjs-default-rtdb.firebaseio.com",
  projectId: "wtc-realtime-chatapp-reactjs",
  storageBucket: "wtc-realtime-chatapp-reactjs.appspot.com",
  messagingSenderId: "665168057281",
  appId: "1:665168057281:web:0ee5eb0348393066bd5540"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var db = firebase.firestore();
const storage = firebase.storage();
export  {auth,firebase,db,storage};

