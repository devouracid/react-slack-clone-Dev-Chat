import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAyUsBLsx6P9eT4Y4QYiMcQp5AkEYwH0n8",
  authDomain: "react-slack-clone-cf295.firebaseapp.com",
  databaseURL: "https://react-slack-clone-cf295.firebaseio.com",
  projectId: "react-slack-clone-cf295",
  storageBucket: "react-slack-clone-cf295.appspot.com",
  messagingSenderId: "922664530055",
};
firebase.initializeApp(config);

export default firebase;
