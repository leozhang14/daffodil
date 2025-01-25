import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyImageNode } from '@daffodil/product/driver/shopify';

class MockShopifyImageNode implements ShopifyImageNode {
  id = `gid://shopify/ProductImage/${faker.datatype.number({ min: 10000000000 })}`;
  url = faker.image.imageUrl();
  altText = faker.random.words(5);
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyImageNodeFactory extends DaffModelFactory<ShopifyImageNode> {
  constructor(){
    super(MockShopifyImageNode);
  }
}
