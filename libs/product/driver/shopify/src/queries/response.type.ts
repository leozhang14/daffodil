import { ProductGraph } from '../models/product-graph';
import { ProductNode } from '../models/shopify-product';

export interface AllProductsResponse {
  products?: ProductGraph;
}

export interface SingleProductResponse extends ProductNode {};
