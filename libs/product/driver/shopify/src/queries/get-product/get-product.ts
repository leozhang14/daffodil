import { gql } from 'apollo-angular';

import { ShopifyProductSingleResponse } from '../response.type';
import { ShopifyProductIDVariables } from '../variables.type';

export const DAFF_SHOPIFY_GET_PRODUCT_QUERY_NAME = 'ShopifyGetAProduct';

/**
 * GraphQL query object for getting all products.
 */
export const getProduct = gql<ShopifyProductSingleResponse, ShopifyProductIDVariables>`
 query ${DAFF_SHOPIFY_GET_PRODUCT_QUERY_NAME}($id: ID!) {
	 product(id: $id) {
		 handle
		 id
		 title
		 description
		 availableForSale
		 priceRange {
			 maxVariantPrice {
				 amount
				 currencyCode
			 }
		 }
		 images(first: 1) {
			 nodes {
				 id
				 url
				 altText
			 }
		 }
		 onlineStoreUrl
	 }
 }
`;
