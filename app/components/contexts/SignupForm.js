"use client";
import { useState } from "react";
import { signUpWithEmailAndPassword } from "@/app/lib/authHelpers";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    // Prevent full-page reload on form submit
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      setLoading(true);
      // Calls Firebase createUserWithEmailAndPassword via the helper.
      // Returns { error } — if error is set, something went wrong.
      const { error } = await signUpWithEmailAndPassword(email, password);
      if (error) {
        setError(error);
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {/* Show Firebase error messages inline so the user knows what went wrong */}
      {error && <p>{error}</p>}
      {success && <p>Account created!</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Creating account..." : "Sign Up"}
      </button>
    </form>
  );
}
