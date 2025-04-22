import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './storefront-schema.json',
  documents: [
    '../../../../../libs/*/driver/shopify/src/*/gql/**/*.ts',
  ],
  generates: {
    './generated-shopify-types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
      config: {
        typesPrefix: 'Shopify',
      },
    },
  },
};
export default config;
