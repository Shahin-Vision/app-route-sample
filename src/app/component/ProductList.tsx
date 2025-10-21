import React from 'react'
import { ProductService } from '../services/product-services'
import ProductCard from './product-card/ProductCard';

export default async function ProductList() {
    var products = await ProductService.getProducts();
  return (
    <div className='d-flex flex-wrap gap-3'>
        {
            products.map((p:any) => {
                return(
                    <ProductCard key={p.id} product={p} />
                )
            })
        }
    </div>
  )
}