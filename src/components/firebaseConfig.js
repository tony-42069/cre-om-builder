import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLNnu5QEqs-ASQX0wEa9fHollHCElkjvc",
  authDomain: "om-builder-web.firebaseapp.com",
  projectId: "om-builder-web",
  storageBucket: "om-builder-web.firebasestorage.app",
  messagingSenderId: "225585338842",
  appId: "1:225585338842:web:f8349cedd2486b669048e3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);