import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyProductPriceRange } from '@daffodil/product/driver/shopify';

class MockShopifyProductPriceRange implements ShopifyProductPriceRange {
  maxVariantPrice = {
    amount: parseFloat(faker.commerce.price()),
    currencyCode: faker.finance.currencyCode(),
  };
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductPriceRangeFactory extends DaffModelFactory<ShopifyProductPriceRange> {
  constructor(){
    super(MockShopifyProductPriceRange);
  }
}
