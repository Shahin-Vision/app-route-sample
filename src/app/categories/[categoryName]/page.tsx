import { ProductService } from "@/app/services/product-services";
import ProductList from "@/app/component/ProductList";
import GotoCartButton from "@/app/component/GotoCartButton";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) {
  // ✅ Await params (required in Next.js 15)
  const resolvedParams = await params;
  const categoryName = decodeURIComponent(resolvedParams.categoryName);
  
  let products: Product[] = [];
  let displayTitle = "";

  console.log("Category route hit with:", categoryName);

  try {
    if (categoryName === "all-products") {
      products = await ProductService.getProducts();
      displayTitle = "All Products";
    } else {
      // ✅ Convert URL format back to API format
      // "mens-clothing" -> "men's clothing"
      let apiCategory = categoryName.toLowerCase();
      
      // Handle specific conversions
      if (apiCategory === "mens-clothing") {
        apiCategory = "men's clothing";
      } else if (apiCategory === "womens-clothing") {
        apiCategory = "women's clothing";
      } else {
        // For other categories, just replace hyphens with spaces
        apiCategory = apiCategory.replace(/-/g, " ");
      }
      
      console.log("Fetching API category:", apiCategory);
      products = await ProductService.getProductsByCategory(apiCategory);
      
      displayTitle = apiCategory
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }
  } catch (error) {
    console.error("Error fetching category products:", error);
  }

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-end mb-3">
        <GotoCartButton />
      </div>

      <h2 className="text-center mb-4">
        {displayTitle}
      </h2>

      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <div className="text-center my-5 text-danger">
          <h5>No products found in this category.</h5>
        </div>
      )}
    </div>
  );
}