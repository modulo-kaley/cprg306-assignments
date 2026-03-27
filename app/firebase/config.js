import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase project credentials — values come from .env so they are never
// hard-coded in source. All keys are prefixed NEXT_PUBLIC_ so Next.js
// exposes them to the browser bundle.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Prevent re-initializing the app on hot reloads (Next.js dev mode runs this
// module more than once). Re-use the existing app if one already exists.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Analytics only runs in the browser — getAnalytics throws on the server.
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const auth = typeof window !== "undefined" ? getAuth(app) : null;

export { app, analytics, auth };
