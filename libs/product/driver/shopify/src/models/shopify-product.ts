import { ProductImages } from './product-images';
import { ProductPriceRange } from './product-price-range';

export interface ProductNode {
  __typename?: 'Product';
  handle: string;
  id: string;
  title: string;
  description: string;
  onlineStoreUrl: string;
  availableForSale: boolean;
  priceRange: ProductPriceRange;
  images: ProductImages;
}
