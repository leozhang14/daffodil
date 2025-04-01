import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  ShopifyProductNode,
  shopifyHandleTransformer,
  shopifyIdTransformer,
  shopifyImageTransformer,
} from '@daffodil/driver/shopify';

import { ShopifyImageNodeFactory } from './image-node.factory';
import { ShopifyProductVariantsPriceRangeFactory } from './product-variants-price-range.factory';

class MockShopifyProductNode implements ShopifyProductNode {
  title = faker.commerce.productName();
  handle = shopifyHandleTransformer(faker.commerce.productName());
  id = shopifyIdTransformer(`${faker.datatype.number({ min: 100000000000 })}`, 'Product');
  description = faker.commerce.productDescription();
  onlineStoreUrl = faker.internet.domainName();
  availableForSale = faker.datatype.boolean();
  priceRange = this.shopifyProductVariantsPriceRangeFactory.create();
  images = {
    nodes: this.shopifyImageNodeFactory.createMany().map(node => shopifyImageTransformer(node, 'ProductImage')),
  };

  constructor(
    protected shopifyProductVariantsPriceRangeFactory: ShopifyProductVariantsPriceRangeFactory,
    protected shopifyImageNodeFactory: ShopifyImageNodeFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductNodeFactory extends DaffModelFactory<ShopifyProductNode, typeof MockShopifyProductNode> {
  constructor(
    shopifyProductVariantsPriceRangeFactory: ShopifyProductVariantsPriceRangeFactory,
    shopifyImageNodeFactory: ShopifyImageNodeFactory,
  ) {
    super(MockShopifyProductNode, shopifyProductVariantsPriceRangeFactory, shopifyImageNodeFactory);
  }
}
