"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

// Context object that will hold the auth state for the whole app.
// Consumed via the useAuth() hook below — never accessed directly.
// Default value prevents throws during Next.js static prerendering.
const AuthContext = createContext({
  user: null,
  loading: true,
  gitHubSignIn: () => Promise.resolve(),
  firebaseSignOut: () => Promise.resolve(),
});

// Wraps the entire app (in layout.js) so every page can read auth state.
// Provides: authUser (Firebase User object or null), loading (bool).
export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function.
    // Firebase calls this callback whenever the user signs in or out.
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          console.log("User Authenticated: ", user.email);
        } else {
          console.log("No User Found");
        }
        setAuthUser(user);
        setLoading(false);
        console.log("loading complete");
      },
      (error) => {
        console.error("Auth error", error);
        setAuthUser(null);
        setLoading(false);
      },
    );

    // Unsubscribe from the listener when the component unmounts to avoid
    // memory leaks and stale state updates.
    return () => {
      console.log("Cleaning up listener");
      unsubscribe();
    };
  }, []);

  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const firebaseSignOut = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user: authUser, loading, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook — call this in any client component to get the current user.
// Throws if used outside of AuthProvider so mistakes are caught early.
export function useAuth() {
  return useContext(AuthContext);
}

export function useUserAuth() {
  return useAuth();
}
