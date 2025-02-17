import { TestBed } from '@angular/core/testing';

import { ShopifyProductGraph } from '@daffodil/driver/shopify';

import { ShopifyProductGraphFactory } from './product-graph.factory';

describe('@daffodil/product/driver/shopify/testing | ShopifyProductGraphFactory', () => {

  let factory: ShopifyProductGraphFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyProductGraphFactory],
    });

    factory = TestBed.inject(ShopifyProductGraphFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: ShopifyProductGraph;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.nodes).toBeDefined();
    });
  });
});
