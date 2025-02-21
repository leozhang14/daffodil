import { ShopifyProductImages } from './product-images';

type ShopifyImageNodeType = ShopifyProductImages['nodes'][number];

export interface ShopifyImageNode extends ShopifyImageNodeType {}
