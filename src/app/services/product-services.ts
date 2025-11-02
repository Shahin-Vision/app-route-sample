import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  // ✅ Get all products
  static async getProducts() {
    const resp = await fetch(this.getUrl("/products"));
    if (!resp.ok) throw new Error("Failed to fetch products");
    return await resp.json();
  }

  // ✅ Get product by ID
  static async getProductById(id: number) {
    const resp = await fetch(this.getUrl(`/products/${id}`));
    if (!resp.ok) throw new Error(`Failed to fetch product with ID ${id}`);
    return await resp.json();
  }

  // ✅ Get products by category
  static async getProductsByCategory(category: string) {
    // API expects exact format: jewelery, electronics, men's clothing, women's clothing
    const apiCategory = category.toLowerCase().trim();
    const resp = await fetch(this.getUrl(`/products/category/${encodeURIComponent(apiCategory)}`));

    if (!resp.ok) {
      console.error("Category fetch failed:", resp.statusText);
      return [];
    }

    return await resp.json();
  }
}