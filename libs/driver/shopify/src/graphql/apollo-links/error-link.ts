import { ApolloLink } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';

export function createErrorLink(): ApolloLink {
  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      });
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });
}
