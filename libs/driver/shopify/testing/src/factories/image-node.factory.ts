import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyImageNode } from '@daffodil/driver/shopify';

class MockShopifyImageNode implements ShopifyImageNode {
  id = '';
  url = faker.image.imageUrl();
  altText = faker.random.words(5);
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyImageNodeFactory extends DaffModelFactory<ShopifyImageNode, typeof MockShopifyImageNode> {
  constructor(){
    super(MockShopifyImageNode);
  }
}
