// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABGBnVmoixXHDLdxLVGDId7B_0l3lynjY",
  authDomain: "web-service-6b5e5.firebaseapp.com",
  projectId: "web-service-6b5e5",
  storageBucket: "web-service-6b5e5.appspot.com",
  messagingSenderId: "979167535419",
  appId: "1:979167535419:web:1817a5a6fd233b1b76971e",
  measurementId: "G-S8YFPWT6YM"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
