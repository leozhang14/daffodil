import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  ShopifyMoney,
  CurrencyCode,
} from '@daffodil/driver/shopify';

class MockShopifyMoney implements ShopifyMoney {
  amount = parseFloat(faker.commerce.price());
  currencyCode = faker.helpers.objectValue(CurrencyCode);
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyMoneyFactory extends DaffModelFactory<ShopifyMoney> {
  constructor(){
    super(MockShopifyMoney);
  }
}
