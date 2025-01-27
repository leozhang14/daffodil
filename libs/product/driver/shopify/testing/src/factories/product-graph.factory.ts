import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyProductGraph } from '@daffodil/product/driver/shopify';

import { ShopifyProductNodeFactory } from './product-node.factory';

class MockShopifyProductGraph implements ShopifyProductGraph {
  nodes = this.shopifyProductNodeFactory.createMany();

  constructor(
    protected shopifyProductNodeFactory: ShopifyProductNodeFactory,
  ) {}
}


@Injectable({
  providedIn: 'root',
})
export class ShopifyProductGraphFactory extends DaffModelFactory<ShopifyProductGraph> {
  constructor(
    shopifyProductNodeFactory: ShopifyProductNodeFactory,
  ){
    super(MockShopifyProductGraph, shopifyProductNodeFactory);
  }
}
