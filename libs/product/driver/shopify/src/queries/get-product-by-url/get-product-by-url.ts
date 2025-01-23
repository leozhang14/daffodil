import { gql } from 'apollo-angular';

import { ShopifyProductSingleResponse } from '../response.type';
import { ShopifyProductUrlVariables } from '../variables.type';

export const DAFF_SHOPIFY_GET_PRODUCT_BY_URL_QUERY_NAME = 'ShopifyGetProductByURL';

/**
 * GraphQL query object for getting all products.
 */
export const getProductByUrl = gql<ShopifyProductSingleResponse, ShopifyProductUrlVariables>`
 query ${DAFF_SHOPIFY_GET_PRODUCT_BY_URL_QUERY_NAME}($handle: String!) {
	 product(handle: $handle) {
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
