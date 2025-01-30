import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyMoneyFactory } from '@daffodil/driver/shopify/testing';
import { ShopifyProductPriceRange } from '@daffodil/product/driver/shopify';

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
