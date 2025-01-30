import { inject } from '@angular/core';
import { InMemoryCache } from '@apollo/client/cache';
import { ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { HttpLink } from 'apollo-angular/http';

export function createApolloConfig({
  uri,
  headers,
}: {
  uri: string;
  headers: { [key: string]: string };
}) {
  const httpLink = inject(HttpLink);

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      });
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });

  const authLink = setContext(() => ({
    headers: {
      ...headers,
    },
  }));

  return {
    link: ApolloLink.from([errorLink, authLink, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}
