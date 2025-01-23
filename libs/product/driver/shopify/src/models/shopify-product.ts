import { ProductImages } from './product-images';
import { ProductPriceRange } from './product-price-range';

export interface ProductNode {
  handle: string;
  id: string;
  title: string;
  description: string;
  onlineStoreUrl: string | null;
  availableForSale: boolean;
  priceRange: ProductPriceRange;
  images: ProductImages;
}
