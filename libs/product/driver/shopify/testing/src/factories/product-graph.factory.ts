import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  ShopifyProductGraph,
  shopifyHandleTransformer,
} from '@daffodil/product/driver/shopify';

class MockShopifyProductGraph implements ShopifyProductGraph {
  nodes = [
    {
      title: faker.commerce.productName(),
      handle: shopifyHandleTransformer(faker.commerce.productName()),
      id: `gid://shopify/Product/${faker.datatype.number({ min: 100000000000 })}`,
      description: faker.commerce.productDescription(),
      onlineStoreUrl: faker.internet.domainName(),
      availableForSale: faker.datatype.boolean(),
      priceRange: {
        maxVariantPrice: {
          amount: parseFloat(faker.commerce.price()),
          currencyCode: faker.finance.currencyCode(),
        },
      },
      images: {
        nodes: [
          {
            id: `gid://shopify/ProductImage/${faker.datatype.number({ min: 10000000000 })}`,
            url: faker.image.imageUrl(),
            altText: faker.random.words(5),
          },
        ],
      },
    },
  ];
}


@Injectable({
  providedIn: 'root',
})
export class ShopifyProductGraphFactory extends DaffModelFactory<ShopifyProductGraph> {
  constructor(){
    super(MockShopifyProductGraph);
  }
}
