import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  ShopifyProductNode,
  shopifyHandleTransformer,
} from '@daffodil/product/driver/shopify';

import { ShopifyProductImagesFactory } from './product-images.factory';
import { ShopifyProductPriceRangeFactory } from './product-price-range.factory';

class MockShopifyProductNode implements ShopifyProductNode {
  title = faker.commerce.productName();
  handle = shopifyHandleTransformer(faker.commerce.productName());
  id = `gid://shopify/Product/${faker.datatype.number({ min: 100000000000 })}`;
  description = faker.commerce.productDescription();
  onlineStoreUrl = faker.internet.domainName();
  availableForSale = faker.datatype.boolean();
  priceRange = this.shopifyProductPriceRangeFactory.create();
  images = this.shopifyProductImagesFactory.create();

  constructor(
    protected shopifyProductPriceRangeFactory: ShopifyProductPriceRangeFactory,
    protected shopifyProductImagesFactory: ShopifyProductImagesFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductNodeFactory extends DaffModelFactory<ShopifyProductNode> {
  constructor(
    shopifyProductPriceRangeFactory: ShopifyProductPriceRangeFactory,
    shopifyProductImagesFactory: ShopifyProductImagesFactory,
  ) {
    super(MockShopifyProductNode, shopifyProductPriceRangeFactory, shopifyProductImagesFactory);
  }
}
