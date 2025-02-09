import { ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

export function createAuthLink(accessToken: string): ApolloLink {
  return setContext(() => ({
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': accessToken,
    },
  }));
}
