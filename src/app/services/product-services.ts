import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
    static getProducts = async () => {
        const productResp = await fetch(this.getUrl('/products'));

        const products = await productResp.json()
        
        return products;
    }


    static getProductById = async (id: number) => {
    const productResp = await fetch(this.getUrl(`/products/${id}`));
    const product = await productResp.json();
    return product;
    }


    static getProductsByCategory = async (category: string) => {
    const productResp = await fetch(this.getUrl(`/products/category/${category}`));
    const products = await productResp.json();
    return products;
}

}