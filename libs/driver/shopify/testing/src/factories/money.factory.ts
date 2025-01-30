import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { ShopifyMoney } from '@daffodil/driver/shopify';

import { getRandomCurrency } from '../get-random-currency';

class MockShopifyMoney implements ShopifyMoney {
  amount = parseFloat(faker.commerce.price());
  currencyCode = getRandomCurrency();
}

@Injectable({
  providedIn: 'root',
})
export class ShopifyMoneyFactory extends DaffModelFactory<ShopifyMoney> {
  constructor(){
    super(MockShopifyMoney);
  }
}
