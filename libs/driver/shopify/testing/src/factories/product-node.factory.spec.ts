import { TestBed } from '@angular/core/testing';

import { ShopifyProductNode } from '@daffodil/driver/shopify';

import { ShopifyProductNodeFactory } from './product-node.factory';

describe('@daffodil/product/driver/shopify/testing | ShopifyProductNodeFactory', () => {

  let factory: ShopifyProductNodeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyProductNodeFactory],
    });

    factory = TestBed.inject(ShopifyProductNodeFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: ShopifyProductNode;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.title).toBeDefined();
      expect(result.handle).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.availableForSale).toBeDefined();
      expect(result.priceRange).toBeDefined();
      expect(result.images).toBeDefined();
    });
  });
});
