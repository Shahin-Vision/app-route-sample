import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./component/Nav/Navigation";
import Footer from "./component/Footer/Footer";
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce built with Next.js",
  keywords: ["ecommerce", "nextjs", "shopping", "flipkart clone"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Context Provider for global cart state */}
        <CartProvider>
          {/* ✅ Navbar */}
          <Navigation />

          {/* ✅ Page Content */}
          <main className="m-0 p-0" style={{ paddingTop: "80px" }}>
            {children}
          </main>

          {/* ✅ Footer */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
