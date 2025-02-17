/**
 * Transforms a faker-js generated object name to a valid shopify handle (lowercase chars with hyphens instead of spaces)
 *
 * @param title - string
 * @returns string
 */
export const shopifyHandleTransformer = (title: string): string => {
  const noSpaces = title.replace(/ /g, '-');
  const handle = noSpaces.toLowerCase();
  return handle;
};
