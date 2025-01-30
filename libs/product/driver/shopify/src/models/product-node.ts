import { ShopifyGetAProductQuery } from '@daffodil/driver/graphql';

export type ShopifyProductNodeType = ShopifyGetAProductQuery['product'];

export interface ShopifyProductNode extends ShopifyProductNodeType {}
