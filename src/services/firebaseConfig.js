import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA_gsAILy8LpdV-8znEelutAXi35va2HCs",
  authDomain: "junktechauth-ca7ef.firebaseapp.com",
  projectId: "junktechauth-ca7ef",
  storageBucket: "junktechauth-ca7ef.firebasestorage.app",
  messagingSenderId: "927036276352",
  appId: "1:927036276352:web:bb5396fb65d253df31b065",
  measurementId: "G-JM3EP3M7SG"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
