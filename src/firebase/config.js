import app from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDKJHNZVbSlo5T7OkXw8kaAJ1D2SYaRX5I",
	authDomain: "project-udesa-react-native.firebaseapp.com",
	projectId: "project-udesa-react-native",
	storageBucket: "project-udesa-react-native.appspot.com",
	messagingSenderId: "456016306612",
	appId: "1:456016306612:web:95c5d4a8c1d1d5f2f0d2e1",
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();
