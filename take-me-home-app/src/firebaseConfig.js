// Import the necessary functions from Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDEt3p9tWzJqpi4L0K7GOUpThgInw64pbY',
    authDomain: 'takemehome-f75d0.firebaseapp.com',
    projectId: 'takemehome-f75d0',
    storageBucket: 'takemehome-f75d0.appspot.com',
    messagingSenderId: '420959228079',
    appId: '1:420959228079:web:df04c9a75e8b3650cb445a',
    measurementId: 'G-1P97YPRTLY'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // Firebase Authentication
const db = getFirestore(app); // Cloud Firestore

// Export the initialized services
export { auth, db };
