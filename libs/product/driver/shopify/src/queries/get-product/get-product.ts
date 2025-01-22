import { gql } from 'apollo-angular';

import { SingleProductResponse } from '../response.type';
import { IDProductVariables } from '../variables.type';

export const DAFF_SHOPIFY_GET_PRODUCT_QUERY_NAME = 'ShopifyGetAProduct';

/**
 * GraphQL query object for getting all products.
 */
export const getProduct = gql<SingleProductResponse, IDProductVariables>`
 query ${DAFF_SHOPIFY_GET_PRODUCT_QUERY_NAME}($id: ID!) {
	 product(id: $id) {
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
