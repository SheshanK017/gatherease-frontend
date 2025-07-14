import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyCCpfnmr4MWqf4nLLGy087ycU2xZNOuZ78",
  authDomain: "gatherease-afb24.firebaseapp.com",
  projectId: "gatherease-afb24",
  storageBucket: "gatherease-afb24.firebasestorage.app",
  messagingSenderId: "870984430795",
  appId: "1:870984430795:web:558266a73d5b0e1267d74e",
  measurementId: "G-JYTKF1SMJQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
