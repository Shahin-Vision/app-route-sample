import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  static getProducts = async () => {
    const resp = await fetch(this.getUrl("/products"));
    return await resp.json();
  };

  static getProductById = async (id: number) => {
    const resp = await fetch(this.getUrl(`/products/${id}`));
    return await resp.json();
  };

  static getProductsByCategory = async (category: string) => {
    const resp = await fetch(this.getUrl(`/products/category/${category}`));
    return await resp.json();
  };
}
