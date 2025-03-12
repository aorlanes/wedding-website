import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyC0xNunR7Z2b6r9K5kpVmCEYat-Px5zbBQ',
  authDomain: 'anjela-and-enrique.firebaseapp.com',
  projectId: 'anjela-and-enrique',
  storageBucket: 'anjela-and-enrique.firebasestorage.app',
  messagingSenderId: '340254871820',
  appId: '1:340254871820:web:a422c40cc363744421b929',
  measurementId: 'G-R65ETP88Q5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
