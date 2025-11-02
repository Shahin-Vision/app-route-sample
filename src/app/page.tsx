"use client";

import Link from "next/link";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function HomePage() {
  const categories: Category[] = [
    {
      id: 0,
      name: "All Products",
      image: "/images/AllProduct.jpeg",
      description: "Browse all products available",
    },
    {
      id: 1,
      name: "Jewelery",
      image: "/images/jewellery.webp",
      description: "Beautiful and elegant jewelry for all occasions.",
    },
    {
      id: 2,
      name: "Electronics",
      image: "/images/electronics.jpg",
      description: "Latest gadgets and electronics with great offers.",
    },
    {
      id: 3,
      name: "Men's Clothing",
      image: "/images/menscloth.webp",
      description: "Stylish and comfortable clothing for men.",
    },
    {
      id: 4,
      name: "Women's Clothing",
      image: "/images/womenscloth.jpg",
      description: "Trendy fashion wear for women.",
    },
  ];

  // ✅ Utility to make URL-safe category names
  const formatCategoryName = (name: string) => {
    // Convert to lowercase and handle special cases
    const lower = name.toLowerCase();
    
    // Map display names to URL-friendly versions
    if (lower === "all products") return "all-products";
    if (lower === "jewelery") return "jewelery";
    if (lower === "electronics") return "electronics";
    if (lower === "men's clothing") return "mens-clothing";
    if (lower === "women's clothing") return "womens-clothing";
    
    // Default: remove apostrophes and replace spaces with hyphens
    return lower.replace(/'/g, "").replace(/\s+/g, "-");
  };

  return (
    <div className="min-vh-100 bg-black text-white d-flex flex-column">
      {/* 🏷️ Hero Banner */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          height: "70vh",
          backgroundImage: "url('/images/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          <Link href="/categories/all-products" className="btn btn-light btn-lg px-4">
            Shop Now
          </Link>
        </div>
      </section>

      {/* 🛍️ Top Categories Section */}
      <section className="container my-5 flex-grow-1">
        <h2 className="text-center mb-4 fw-bold">🛍️ Top Categories</h2>
        <div className="row g-4 justify-content-center">
          {categories.map((item) => {
            const categoryUrl = formatCategoryName(item.name);
            console.log(`Category: ${item.name} -> URL: /categories/${categoryUrl}`);
            
            return (
              <div key={item.id} className="col-6 col-md-2">
                <Link
                  href={`/categories/${categoryUrl}`}
                  className="text-decoration-none"
                >
                  <div
                    className="card bg-dark text-white shadow-sm border-0 h-100 text-center hover-card"
                    style={{
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      borderRadius: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <div className="position-relative" style={{ height: "180px" }}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: "cover", borderRadius: "0.5rem" }}
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
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <style jsx>{`
        .hover-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}