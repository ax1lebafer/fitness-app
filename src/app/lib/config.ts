// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import  { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe303N5lveZUkzXVtnlymO0TCQHc3VudI",
  authDomain: "fitnes-pro-33359.firebaseapp.com",
  databaseURL: "https://fitnes-pro-33359-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitnes-pro-33359",
  storageBucket: "fitnes-pro-33359.appspot.com",
  messagingSenderId: "29721984613",
  appId: "1:29721984613:web:0d18492c17e004c13b908c"
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
  // projectId: process.env.FIERBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCEYyrx4IgxkVNFjXlE5F2nPFAIifW_e_I",
//   authDomain: "fitness-app-5961d.firebaseapp.com",
//   databaseURL: "https://fitness-app-5961d-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "fitness-app-5961d",
//   storageBucket: "fitness-app-5961d.appspot.com",
//   messagingSenderId: "400112139898",
//   appId: "1:400112139898:web:37d32e4c5bb5aa65df05c3"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const firestore = firebase.firestore();
// export default function () { (<>Dummy function</>) }
