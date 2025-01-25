import { TestBed } from '@angular/core/testing';

import { ShopifyMoney } from '@daffodil/driver/shopify';

import { ShopifyMoneyFactory } from './money.factory';

describe('@daffodil/product/driver/shopify/testing | ShopifyMoneyFactory', () => {

  let factory: ShopifyMoneyFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyMoneyFactory],
    });

    factory = TestBed.inject(ShopifyMoneyFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: ShopifyMoney;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.amount).toBeDefined();
      expect(result.currencyCode).toBeDefined();
    });
  });
});
