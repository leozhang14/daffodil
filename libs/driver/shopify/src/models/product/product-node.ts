import { ShopifyGetAProductQuery } from '../../codegen/generated-shopify-types';

export type ShopifyProductNodeType = ShopifyGetAProductQuery['product'];

export interface ShopifyProductNode extends ShopifyProductNodeType {}
