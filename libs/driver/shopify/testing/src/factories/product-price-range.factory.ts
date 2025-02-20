import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyProductPriceRange } from '@daffodil/driver/shopify';

import { ShopifyMoneyFactory } from './money.factory';

class MockShopifyProductPriceRange implements ShopifyProductPriceRange {
  maxVariantPrice = this.shopifyMoneyFactory.create();
  minVariantPrice = this.shopifyMoneyFactory.create();
  constructor(
    protected shopifyMoneyFactory: ShopifyMoneyFactory,
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyProductPriceRangeFactory extends DaffModelFactory<ShopifyProductPriceRange> {
  constructor(
    shopifyMoneyFactory: ShopifyMoneyFactory,
  ){
    super(MockShopifyProductPriceRange, shopifyMoneyFactory);
  }
}
