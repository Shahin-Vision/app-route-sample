"use client";

import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="card m-2 shadow-sm hover-card"
      style={{ width: "18rem", borderRadius: "10px", overflow: "hidden" }}
    >
      {/* ✅ Click on image/card goes to product detail */}
      <Link
        href={`/products/${product.id}`}
        className="text-decoration-none text-dark"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "200px",
            background: "#fff",
          }}
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, 300px"
            priority
          />
        </div>

        <div className="card-body">
          <h5
            className="card-title"
            style={{ 
              fontSize: "1rem", 
              minHeight: "3rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical"
            }}
          >
            {product.title}
          </h5>
          <p className="card-text fw-bold text-primary">₹{product.price}</p>
          <p className="card-text text-muted small text-capitalize">
            {product.category}
          </p>
        </div>
      </Link>

      <style jsx>{`
        .hover-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
}