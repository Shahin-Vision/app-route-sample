import { Metadata } from "next";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";
import GotoCartButton from "../component/GotoCartButton";
import ProductList from "../component/ProductList";
import { ProductService } from "../services/product-services";

// If needed, you can define a type for product
interface Product {
  id: number;
  title: string;
  image?: string;
}

async function getProducts(): Promise<Product[]> {
  const productResp = await ProductService.getProducts();
  return productResp;
}

export const metadata: Metadata = {
  title: "Products List Page",
};

interface ProductsPageProps {
  params?: Record<string, string>;
  searchParams?: Record<string, string>;
}

export default async function ProductsPage(props: ProductsPageProps) {
  // Fetch products
  const products = await getProducts();

  console.log("Products page executed", props);

  // Cookies
  const cookieList = await cookies();
  const tokenCookie = cookieList.get("authToken");
  console.log("token is:", tokenCookie, tokenCookie?.value);

  // Headers
  const headerList = await headers();
  console.log("Referer:", headerList.get("referer"));
  console.log("User-Agent:", headerList.get("user-agent"));
  console.log("Host:", headerList.get("host"));

  return (
    <div>
      <GotoCartButton />
      <h3>Products List</h3>

      <Link href="#recommended" prefetch={false}>
        Go to Recommended Section
      </Link>

      {/* Suspense for async product list */}
      <Suspense fallback={<span style={{ color: "red" }}>Loading...</span>}>
        <ProductList />
      </Suspense>

      <h3 id="recommended">Recommended Products</h3>

      {/* Optional: show product count */}
      <p>Total products loaded: {products.length}</p>
    </div>
  );
}
