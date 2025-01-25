import { ShopifyProductGraph } from '../models/product-graph';
import { ShopifyProductNode } from '../models/product-node';

export interface ShopifyProductAllResponse {
  products?: ShopifyProductGraph;
}

export interface ShopifyProductSingleResponse extends ShopifyProductNode {};
