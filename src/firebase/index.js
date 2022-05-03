import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAllcizEWQW9lOLr-QpRbyPwkavyBBKiGc",
  authDomain: "powercom-36ce6.firebaseapp.com",
  projectId: "powercom-36ce6",
  storageBucket: "powercom-36ce6.appspot.com",
  messagingSenderId: "583869994372",
  appId: "1:583869994372:web:78e93737cf07e6e4edb9d1",
  measurementId: "G-JPPQWN1540",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
