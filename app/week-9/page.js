"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  // Auth state comes from context — no need to call sign-in/out here
  // since the NavBar handles that directly.
  const { user, gitHubSignIn } = useUserAuth();
  const router = useRouter();

  // ── Sign in and redirect ──────────────────────────────────
  // Triggers GitHub OAuth popup, then pushes to the shopping
  // list page once the user object is confirmed.
  const handleSignIn = async () => {
    await gitHubSignIn();
    router.push("/week-9/shopping-list");
  };

  return (
    <main className="page-landing">
      <h1>Welcome to the Shopping List App</h1>
      <p className="subtitle">Sign in with GitHub to access your list.</p>

      {user ? (
        // ── Logged in ────────────────────────────────────
        <div className="login-card">
          <p className="user-greeting">
            Welcome back, <span>{user.displayName}</span>
            <span className="user-email"> ({user.email})</span>
          </p>
          <Link href="/week-9/shopping-list" className="home-link text-center">
            Go to Shopping List
          </Link>
        </div>
      ) : (
        // ── Logged out ───────────────────────────────────
        <div className="login-card">
          <p className="user-greeting">You are not signed in.</p>
          <p className="subtitle">Use the 🔑 in the nav bar to sign in.</p>
        </div>
      )}
    </main>
  );
}