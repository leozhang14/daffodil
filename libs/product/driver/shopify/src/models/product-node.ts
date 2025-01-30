import { ShopifyGetAProductQuery } from '@daffodil/driver/shopify';

export type ShopifyProductNodeType = ShopifyGetAProductQuery['product'];

export interface ShopifyProductNode extends ShopifyProductNodeType {}
