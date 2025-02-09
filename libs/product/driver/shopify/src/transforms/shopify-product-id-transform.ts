/**
 * Transforms a DaffProduct id (DaffIdentifiable) into a Shopify Product id
 *
 * See {@link DaffIdentifiable} for more information on the requirements for the id argument of {@link DaffProduct}.
 *
 * @param id - string
 * @returns string
 */
export const shopifyProductIdTransformer = (id: string): string => {
  const shopifyProductId = `gid://shopify/Product/${id}`;
  return shopifyProductId;
};
