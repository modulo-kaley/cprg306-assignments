// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // import analytics
// import { getAnalytics } from "firebase/analytics";
// // set up the configuration for env variables to connect the app to the backend
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SEND_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// let analytics;
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }
// const auth = getAuth(app);

// export { app, analytics, auth };