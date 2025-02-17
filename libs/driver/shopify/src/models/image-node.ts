import { ShopifyProductImages } from './product-images';

type ShopifyProductImageNodeType = ShopifyProductImages['nodes'][number];

export interface ShopifyProductImageNode extends ShopifyProductImageNodeType {}
