import { ShopifyGetAllProductsQuery } from '../../codegen/generated-shopify-types';

type ShopifyProductGraphType = ShopifyGetAllProductsQuery['products'];

export interface ShopifyProductGraph extends ShopifyProductGraphType {};
