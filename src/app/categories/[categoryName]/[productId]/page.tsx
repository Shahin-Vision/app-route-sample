import ProductCard from "@/app/component/product-card/ProductCard";
import { ProductService } from "@/app/services/product-services";

interface CategoryProductProps {
  params: Promise<{
    categoryName: string;
    productId?: string;
  }>;
}

export default async function CategoryProduct({ params }: CategoryProductProps) {
  const resolvedParams = await params;
  const categoryName = decodeURIComponent(resolvedParams.categoryName);
  const productId = resolvedParams.productId;
  
  // Fix: Add proper type with price property
  let productList: { id: number; title: string; image: string; price: number }[] = [];

  if (categoryName) {
    productList = await ProductService.getProductsByCategory(categoryName);
  }

  return (
    <div>
      category : {categoryName} <br />
      ProductId : {productId}
      <h3>{categoryName} Products</h3>
      <div className="d-flex flex-wrap gap-2">
        {productList.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}