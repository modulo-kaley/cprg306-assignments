"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn } = useUserAuth();
  const router = useRouter();

  // ── Auto-redirect on sign in ──────────────────────────────
  // Watches for user state changing. Whenever sign-in completes
  // (whether triggered from the nav 🔑 or the button below),
  // this fires and pushes to the shopping list automatically.
  useEffect(() => {
    if (user) router.push("/week-9/shopping-list");
  }, [user, router]);

  // ── Sign in handler ───────────────────────────────────────
  // Triggers the GitHub OAuth popup. Redirect is handled by
  // the useEffect above once the user object is confirmed.
  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  return (
    <main className="page-landing">
      <h1>Welcome to the Shopping List App</h1>
      <p className="subtitle">Sign in with GitHub to get started.</p>

      {/* ── Logged out state ───────────────────────────────
          If user exists, useEffect redirects before this renders.
          So this is the only state this page ever shows. */}
      <div className="login-card">
        <p className="user-greeting">You are not signed in.</p>
        <button onClick={handleSignIn} className="btn-primary">
          🔑 Sign in with GitHub
        </button>
      </div>
    </main>
  );
}