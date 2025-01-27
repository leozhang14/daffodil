import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyProductImages } from '@daffodil/product/driver/shopify';

import { ShopifyImageNodeFactory } from './image-node.factory';

class MockShopifyProductImages implements ShopifyProductImages {
  nodes = this.shopifyImageNodeFactory.createMany();

  constructor(
    protected shopifyImageNodeFactory: ShopifyImageNodeFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductImagesFactory extends DaffModelFactory<ShopifyProductImages> {
  constructor(
    shopifyImageNodeFactory: ShopifyImageNodeFactory,
  ){
    super(MockShopifyProductImages, shopifyImageNodeFactory);
  }
}
