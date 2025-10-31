"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  // ✅ Redirect to login if no user found in localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        router.replace("/login");
      }
    }
  }, [router]);

  const categories = [
    {
      id: 1,
      name: "Mobiles",
      image: "/images/mobile.webp",
      description: "Latest smartphones from top brands with great discounts.",
    },
    {
      id: 2,
      name: "Laptops",
      image: "/images/laptop.webp",
      description: "Powerful and stylish laptops for work and entertainment.",
    },
    {
      id: 3,
      name: "Fashion",
      image: "/images/dress.webp",
      description: "Trendy clothing and accessories for all styles and seasons.",
    },
    {
      id: 4,
      name: "Watches",
      image: "/images/watch.webp",
      description: "Elegant watches that combine performance with design.",
    },
    {
      id: 5,
      name: "Shoes",
      image: "/images/shoes.webp",
      description: "Comfortable and stylish shoes for every occasion.",
    },
    {
      id: 6,
      name: "Furniture",
      image: "/images/furniture.webp",
      description: "Modern and durable furniture to make your home beautiful.",
    },
  ];

  return (
    <div className="min-vh-100 bg-black text-white d-flex flex-column">
      {/* ✅ Hero Section */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          height: "70vh",
          backgroundImage: "url('/images/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        ></div>

        <div className="position-relative z-2">
          <h1 className="display-4 fw-bold mb-3">Explore Top Deals</h1>
          <p className="lead mb-4">
            Discover amazing deals across every department
          </p>
          <button
            className="btn btn-light btn-lg px-4"
            onClick={() => router.push("/products")}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* ✅ Category Cards Section */}
      <section className="container my-5 flex-grow-1">
        <h2 className="text-center mb-4 fw-bold">🛍️ Top Categories</h2>
        <div className="row g-4">
          {categories.map((item) => (
            <div key={item.id} className="col-6 col-md-2">
              <div
                className="card bg-dark text-white shadow-sm border-0 h-100 text-center hover-card"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderRadius: "0.5rem",
                }}
              >
                <div
                  className="position-relative"
                  style={{ width: "100%", height: "180px" }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{
                      objectFit: "cover",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: "0.5rem",
                    }}
                    priority
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-warning">{item.name}</h5>
                  <p className="card-text small text-light opacity-75">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Hover effect styling */}
      <style jsx>{`
        .hover-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
