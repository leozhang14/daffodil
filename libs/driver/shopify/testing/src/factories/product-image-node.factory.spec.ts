import { TestBed } from '@angular/core/testing';

import { ShopifyImageNode } from '@daffodil/driver/shopify';

import { ShopifyProductImageNodeFactory } from './product-image-node.factory';

describe('@daffodil/product/driver/shopify/testing | ShopifyProductImageNodeFactory', () => {

  let factory: ShopifyProductImageNodeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyProductImageNodeFactory],
    });

    factory = TestBed.inject(ShopifyProductImageNodeFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: ShopifyImageNode;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.url).toBeDefined();
      expect(result.id).toBeDefined();
    });
  });
});
