import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyProductImages } from '@daffodil/product/driver/shopify';

import { ShopifyProductImageNodeFactory } from './product-image-node.factory';

class MockShopifyProductImages implements ShopifyProductImages {
  nodes = this.shopifyProductImageNodeFactory.createMany();

  constructor(
    protected shopifyProductImageNodeFactory: ShopifyProductImageNodeFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductImagesFactory extends DaffModelFactory<ShopifyProductImages> {
  constructor(
    shopifyProductImageNodeFactory: ShopifyProductImageNodeFactory,
  ){
    super(MockShopifyProductImages, shopifyProductImageNodeFactory);
  }
}
