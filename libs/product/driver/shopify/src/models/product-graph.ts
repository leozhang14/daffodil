import { ShopifyGetAllProductsQuery } from '@daffodil/driver/graphql';

type ShopifyProductGraphType = ShopifyGetAllProductsQuery['products'];

export interface ShopifyProductGraph extends ShopifyProductGraphType {};
