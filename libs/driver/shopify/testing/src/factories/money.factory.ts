import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  ShopifyMoney,
  ShopifyCurrencyCode,
} from '@daffodil/driver/shopify';

class MockShopifyMoney implements ShopifyMoney {
  amount = parseFloat(faker.commerce.price());
  currencyCode = faker.helpers.objectValue(ShopifyCurrencyCode);
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyMoneyFactory extends DaffModelFactory<ShopifyMoney, typeof MockShopifyMoney> {
  constructor(){
    super(MockShopifyMoney);
  }
}
