// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { GoogleAuthProvider, getAuth, signInWithPopup, sendPasswordResetEmail, signOut, } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANxmdaEGWhe3gr82dAgSv_kNxu6jIhdv8",
  authDomain: "leguide-ac57c.firebaseapp.com",
  projectId: "leguide-ac57c",
  storageBucket: "leguide-ac57c.appspot.com",
  messagingSenderId: "459996970416",
  appId: "1:459996970416:web:276cf7e16b1ea722f12a75"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const feedback = [];


// Sign with Google
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(doc(collection(db, "users"), user.displayName), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        feedback: feedback,
        creationTime: user.metadata.creationTime,
        lastSeenTime: user.metadata.lastSignInTime,
        userPhoto: user.photoURL,
      });
    }
    console.log("sign sucess");
  } catch (err) {
    console.error(err);
  }
};


// Firebase storage reference
const storage = getStorage(app);
export default storage;

// Logout
const logout = () => {
  signOut(auth);
};


export { auth, db, signInWithGoogle, logout };