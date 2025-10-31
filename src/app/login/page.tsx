"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    let finalEmail = email.trim();

    // ✅ Auto-append "@gmail.com" if missing
    if (!finalEmail.endsWith("@gmail.com")) {
      finalEmail += "@gmail.com";
    }

    // ✅ Basic validation
    if (password.trim().length < 4) {
      setError("Password must be at least 4 characters long.");
      return;
    }

    // ✅ Save user info (for basic identification)
    if (typeof window !== "undefined") {
      localStorage.setItem("user", finalEmail);
      document.cookie = `user=${finalEmail}; path=/; max-age=86400`; // valid for 1 day
    }

    // ✅ Redirect to home after login
    router.push("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4 text-primary">Login</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <small className="text-muted">
              “@gmail.com” will be added automatically if missing.
            </small>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
