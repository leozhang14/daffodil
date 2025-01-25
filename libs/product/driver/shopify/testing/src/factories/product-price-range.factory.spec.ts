import { TestBed } from '@angular/core/testing';

import { ShopifyProductPriceRange } from '@daffodil/product/driver/shopify';

import { ShopifyProductPriceRangeFactory } from './product-price-range.factory';

describe('@daffodil/product/driver/shopify/testing | ShopifyProductPriceRangeFactory', () => {

  let factory: ShopifyProductPriceRangeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyProductPriceRangeFactory],
    });

    factory = TestBed.inject(ShopifyProductPriceRangeFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: ShopifyProductPriceRange;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.maxVariantPrice).toBeDefined();
    });
  });
});
