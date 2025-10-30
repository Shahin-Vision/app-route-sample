"use client";

import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card m-2" style={{ width: "18rem", borderRadius: "10px", overflow: "hidden" }}>
      <Link
        href={`/products/${product.id}`}
        className="text-decoration-none text-dark"
      >
        <div style={{ position: "relative", width: "100%", height: "200px", background: "#fff" }}>
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
          <h5 className="card-title" style={{ fontSize: "1rem", minHeight: "3rem" }}>
            {product.title}
          </h5>
          <p className="card-text fw-bold">₹{product.price}</p>
        </div>
      </Link>
    </div>
  );
}
