export const shopifyUrlTransformer = (url: string): string => {
  const noLeadingSlashes = url.split('/').pop() || '';
  const noTrailingExtension = noLeadingSlashes.split('.')[0];
  const handle = noTrailingExtension;
  return handle;
};
