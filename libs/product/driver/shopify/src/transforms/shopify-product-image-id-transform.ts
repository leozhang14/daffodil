/**
 * Transforms a DaffProduct image id (DaffIdentifiable) into a Shopify Product Image id
 *
 * See {@link DaffIdentifiable} for more information on the requirements for the id argument of {@link DaffProduct}.
 *
 * @param id - string
 * @returns string
 */
export const shopifyProductImageIdTransformer = (id: string): string => {
  const shopifyProductImageId = `gid://shopify/ProductImage/${id}`;
  return shopifyProductImageId;
};
