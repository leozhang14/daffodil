import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './shopify-storefront-schema.json',
  generates: {
    './generated-shopify-types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
    },
  },
};
export default config;
