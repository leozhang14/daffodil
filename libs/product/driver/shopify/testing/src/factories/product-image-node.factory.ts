import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  shopifyProductImageIdTransformer,
  ShopifyProductImageNode,
} from '@daffodil/product/driver/shopify';

class MockShopifyProductImageNode implements ShopifyProductImageNode {
  id = shopifyProductImageIdTransformer(`${faker.datatype.number({ min: 10000000000 })}`);
  url = faker.image.imageUrl();
  altText = faker.random.words(5);
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductImageNodeFactory extends DaffModelFactory<ShopifyProductImageNode> {
  constructor(){
    super(MockShopifyProductImageNode);
  }
}
