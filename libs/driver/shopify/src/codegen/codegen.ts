import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './shopify-storefront-schema.json',
  documents: [
    '../../../../../libs/product/driver/shopify/src/queries/gql/**/*.ts',
  ],
  generates: {
    './generated-shopify-types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
    },
  },
};
export default config;
