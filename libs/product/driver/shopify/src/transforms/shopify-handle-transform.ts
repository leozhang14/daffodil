export const shopifyHandleTransformer = (title: string): string => {
  const noSpaces = title.replace(/ /g, '-');
  const handle = noSpaces.toLowerCase();
  return handle;
};
