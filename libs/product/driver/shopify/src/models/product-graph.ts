import { ShopifyGetAllProductsQuery } from '@daffodil/driver/shopify';

type ShopifyProductGraphType = ShopifyGetAllProductsQuery['products'];

export interface ShopifyProductGraph extends ShopifyProductGraphType {};
