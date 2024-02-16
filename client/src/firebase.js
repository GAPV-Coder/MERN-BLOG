// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'mern-blog-4638f.firebaseapp.com',
    projectId: 'mern-blog-4638f',
    storageBucket: 'mern-blog-4638f.appspot.com',
    messagingSenderId: '892134101972',
    appId: '1:892134101972:web:6ff719db60c716b6d6bc41',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
