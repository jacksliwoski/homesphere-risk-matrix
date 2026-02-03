// FIREBASE CONFIGURATION TEMPLATE
// =============================
// 1. Copy this file and rename it to 'firebase-config.js'
// 2. Fill in your project credentials from the Firebase Console
// 3. 'firebase-config.js' is ignored by Git to protect your keys

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

window.firebaseConfig = firebaseConfig;
