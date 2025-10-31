"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container-fluid px-4">
        {/* Brand */}
        <Link className="navbar-brand fw-bold text-primary" href="/">
          SMILE SHOP
        </Link>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex align-items-center gap-3">
            {/* ✅ Always show Login */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/login" ? "text-primary fw-bold" : ""
                }`}
                href="/login"
              >
                🔐 Login
              </Link>
            </li>

            {/* Home */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/" ? "text-primary fw-bold" : ""
                }`}
                href="/"
              >
                🏠 Home
              </Link>
            </li>

            {/* Products */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname.startsWith("/products")
                    ? "text-primary fw-bold"
                    : ""
                }`}
                href="/products"
              >
                🛍️ Products
              </Link>
            </li>

            {/* Cart */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname.startsWith("/carts") ? "text-primary fw-bold" : ""
                }`}
                href="/carts"
              >
                🛒 Cart
              </Link>
            </li>

            {/* About Us */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/about-us" ? "text-primary fw-bold" : ""
                }`}
                href="/about-us"
              >
                ℹ️ About Us
              </Link>
            </li>

            {/* Contact Us */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/contact-us" ? "text-primary fw-bold" : ""
                }`}
                href="/contact-us"
              >
                📞 Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
