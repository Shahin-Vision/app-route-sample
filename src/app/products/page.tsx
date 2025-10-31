import { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Suspense } from "react";
import { ProductService } from "../services/product-services";
import ProductList from "../component/ProductList";
import ProductCard from "../component/product-card/ProductCard";
import GotoCartButton from "../component/GotoCartButton";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Products List Page",
  description: "Browse all available products",
};

async function getProducts(): Promise<Product[]> {
  try {
    const productResp = await ProductService.getProducts();
    return productResp;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  const cookieList = await cookies();
  const tokenCookie = cookieList.get("authToken");

  const headerList = await headers();
  const userAgent = headerList.get("user-agent");

  console.log("Token:", tokenCookie?.value);
  console.log("User-Agent:", userAgent);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end mb-3">
        <GotoCartButton />
      </div>

      <h2>🛍️ Products List</h2>

      <Suspense fallback={<span style={{ color: "red" }}>Loading products...</span>}>
        <ProductList />
      </Suspense>

      {/* Recommended Products */}
      <h3 className="mt-5" id="recommended">
        Recommended Products
      </h3>
      <div className="d-flex flex-wrap gap-3">
        {products.slice(0, 4).map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
