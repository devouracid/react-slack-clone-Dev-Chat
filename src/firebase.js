import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAyUsBLsx6P9eT4Y4QYiMcQp5AkEYwH0n8",
  authDomain: "react-slack-clone.firebaseapp.com",
  databaseURL: "https://react-slack-clone.firebaseio.com",
  projectId: "react-slack-clone",
  storageBucket: "react-slack-clone.appspot.com",
  messagingSenderId: "423395756405"
};
firebase.initializeApp(config);

export default firebase;
