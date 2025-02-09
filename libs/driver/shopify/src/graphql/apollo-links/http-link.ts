import { inject } from '@angular/core';
import { ApolloLink } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

export function createHttpLink(uri: string): ApolloLink {
  const httpLink = inject(HttpLink);
  return httpLink.create({ uri });
}
