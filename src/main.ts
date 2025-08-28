import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtmrpT-i6g9bL5Dl1roB5p9y6IHnYUO8I",
  authDomain: "ssr-test-v16.firebaseapp.com",
  projectId: "ssr-test-v16",
  storageBucket: "ssr-test-v16.firebasestorage.app",
  messagingSenderId: "481725164060",
  appId: "1:481725164060:web:3c7c05cae8359be6378dd9",
  measurementId: "G-M49LRNEGKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);