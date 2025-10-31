"use client";

import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    console.log("Footer mounted");
  }, []);

  return (
    <footer className="text-center mt-0 py-3 bg-light">
      <p className="text-muted mb-0">© 2025 Smile Shop </p>
    </footer>
  );
}
