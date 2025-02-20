import { ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

/**
 * Creates an Apollo authentication link that adds the Shopify Storefront API (public) access token to requests.
 *
 * @param accessToken - The Shopify Storefront API access token.
 * @returns An ApolloLink instance that sets authentication headers.
 */
export function createAuthLink(accessToken: string): ApolloLink {
  return setContext(() => ({
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': accessToken,
    },
  }));
}
