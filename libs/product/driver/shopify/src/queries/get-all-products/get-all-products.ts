import { gql } from 'apollo-angular';

import { ShopifyProductAllResponse } from '../response.type';
import { ShopifyProductAllVariables } from '../variables.type';

export const DAFF_SHOPIFY_GET_ALL_PRODUCTS_QUERY_NAME = 'ShopifyGetAllProducts';

/**
 * GraphQL query object for getting all products.
 */
export const getAllProducts = gql<ShopifyProductAllResponse, ShopifyProductAllVariables>`
	query ${DAFF_SHOPIFY_GET_ALL_PRODUCTS_QUERY_NAME}($length: Int) {
		products(first: $length)  {
			nodes {
				handle
				onlineStoreUrl
				availableForSale
				priceRange {
					maxVariantPrice {
						amount
						currencyCode
					}
				}
				id
				title
				description
				images(first: 1) {
					nodes {
						id
						url
						altText
					}
				}
			}
		}
	}
`;
