// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDEt3p9tWzJqpi4L0K7GOUpThgInw64pbY',
    authDomain: 'takemehome-f75d0.firebaseapp.com',
    projectId: 'takemehome-f75d0',
    storageBucket: 'takemehome-f75d0.appspot.com',
    messagingSenderId: '420959228079',
    appId: '1:420959228079:web:df04c9a75e8b3650cb445a',
    measurementId: 'G-1P97YPRTLY'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);
