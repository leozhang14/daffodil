import { Products } from '../models/products';
import { ProductNode } from '../models/shopify-product';

export interface AllProductsResponse {
  products?: Products;
}

export interface SingleProductResponse extends ProductNode {};
