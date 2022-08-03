import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


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

async function registerDenganEmailDanPassword(email, password) {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password)
        console.log(result.user)
    }
    catch(err) {
        if (err.code === `auth/email-already-in-use`) {
            console.log('Email telah terdaftar')
        }
        console.log(err.message);
    }
}

async function loginDenganEmailDanPassword(email, password) {
    try {
        const resultLogin = await signInWithEmailAndPassword(auth, email, password)
        console.log(resultLogin.login)
    }
    catch(err) {
        console.log(err.code)
        console.log(err.message)
    }
}

async function logout() {
    try {
        await signOut(auth);
    }
    catch(err) {
        console.log(err)
    }
}


export {
    auth, 
    registerDenganEmailDanPassword,
    loginDenganEmailDanPassword,
    logout
}