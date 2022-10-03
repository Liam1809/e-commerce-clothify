// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_APIKEY,
  authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECTID,
  storageBucket: process.env.REACT_APP_FB_STOREAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FB_APPID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Sign-in with Google Auth
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Auth Firebase
// Initialise Auth Firesttore
export const auth = getAuth();

// sign in wih google popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// sign in with google direct
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Firestore Firebase
// Initialise Firesttore database
export const db = getFirestore();

// get and create user in Firestore Firebase
export const getAndCreateUserFireBase = async userAuth => {
  // get user doc reference
  const userDocRef = await doc(db, 'users', userAuth.uid);
  // get data doc
  const existedUser = await getDoc(userDocRef);

  // check if not exist then create user
  if (!existedUser.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error sign-in with google');
    }
  }

  return userDocRef;
};
