/**
 * Transforms a DaffProduct url (DaffLocatable) into a Shopify Product handle string
 *
 * See {@link DaffLocatable} for more information on the requirements for the url argument of {@link DaffProduct}.
 *
 * @param url - string
 * @returns string
 */
export const shopifyUrlTransformer = (url: string): string => {
  const noLeadingSlashes = url.split('/').pop() || '';
  const noTrailingExtension = noLeadingSlashes.split('.')[0];
  const handle = noTrailingExtension;
  return handle;
};
