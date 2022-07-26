import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACfuW9N6e8GC_Wz8y2IlqcdFoUlh5pwNc",
  authDomain: "final-project-dts.firebaseapp.com",
  projectId: "final-project-dts",
  storageBucket: "final-project-dts.appspot.com",
  messagingSenderId: "272178903985",
  appId: "1:272178903985:web:68ceefc8cd8892ee5cdb90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function register(email, password) {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password)
        console.log(result.user)
    }
    catch(err) {
        console.log(err.code);
        console.log(err.message);
    }
}

export {
    auth, 
    register
}