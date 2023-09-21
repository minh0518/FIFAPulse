// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_API_KEY_FIREBASE,
  authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN_FIREBASE,
  projectId: import.meta.env.REACT_APP_PROJECT_ID_FIREBASE,
  storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET_FIREBASE,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID_FIREBASE,
  appId: import.meta.env.REACT_APP_APP_ID_FIREBASE,
  measurementId: import.meta.env.REACT_APP_MEASUREMENT_ID_FIREBASE,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const dbService = getFirestore(app);
export const storageService = getStorage(app);
