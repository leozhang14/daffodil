// Only used for Shopify Product Driver currently

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './shopify-storefront-schema.json',
  documents: './libs/product/driver/shopify/src/queries/gql/**/*.ts',
  generates: {
    './libs/product/driver/shopify/src/graphql/generated-shopify-types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
    },
  },
};
export default config;
