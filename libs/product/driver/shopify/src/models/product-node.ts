import { ShopifyProductImages } from './product-images';
import { ShopifyProductPriceRange } from './product-price-range';

export interface ShopifyProductNode {
  handle: string;
  id: string;
  title: string;
  description: string;
  onlineStoreUrl: string | null;
  availableForSale: boolean;
  priceRange: ShopifyProductPriceRange;
  images: ShopifyProductImages;
}
