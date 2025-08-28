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
  apiKey: "AIzaSyAlYIvHo5RK8x4CHCLABmm-27rboPaX-DY",
  authDomain: "ssr-test-v16-48d3a.firebaseapp.com",
  projectId: "ssr-test-v16-48d3a",
  storageBucket: "ssr-test-v16-48d3a.firebasestorage.app",
  messagingSenderId: "915151888101",
  appId: "1:915151888101:web:617087f1c5aaa632c67e0c",
  measurementId: "G-Z86SQF9YQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);