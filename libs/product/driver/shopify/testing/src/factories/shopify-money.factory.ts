import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyMoneyV2 } from '@daffodil/product/driver/shopify';

class MockShopifyMoney implements ShopifyMoneyV2 {
  amount = parseFloat(faker.commerce.price());
  currencyCode = faker.finance.currencyCode();
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyMoneyFactory extends DaffModelFactory<ShopifyMoneyV2> {
  constructor(){
    super(MockShopifyMoney);
  }
}
