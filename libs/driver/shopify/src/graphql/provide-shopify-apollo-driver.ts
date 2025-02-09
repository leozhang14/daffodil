import { InMemoryCache } from '@apollo/client/cache';
import { from } from '@apollo/client/core';
import { provideApollo } from 'apollo-angular';

import {
  createErrorLink,
  createAuthLink,
  createHttpLink,
} from './apollo-links/public_api';

export function provideShopifyApolloDriver(domain: string, accessToken: string) {
  const uri = `${domain}/api/2025-01/graphql.json`;
  return provideApollo(() => ({
    link: from([
      createErrorLink(),
      createAuthLink(accessToken),
      createHttpLink(uri),
    ]),
    cache: new InMemoryCache(),
  }));

}
