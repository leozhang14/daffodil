import { gql } from 'apollo-angular';

import { AllProductsResponse } from '../response.type';
import { AllProductsVariables } from '../variables.type';

export const DAFF_SHOPIFY_GET_ALL_PRODUCTS_QUERY_NAME = 'ShopifyGetAllProducts';

/**
 * GraphQL query object for getting all products.
 */
export const getAllProducts = gql<AllProductsResponse, AllProductsVariables>`
	query ${DAFF_SHOPIFY_GET_ALL_PRODUCTS_QUERY_NAME}($length: Int) {
		products(first: $length)  {
			nodes {
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
