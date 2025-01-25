import { TestBed } from '@angular/core/testing';

import { ShopifyProductImages } from '@daffodil/product/driver/shopify';

import { ShopifyProductImagesFactory } from './product-images.factory';

describe('@daffodil/product/driver/shopify/testing | ShopifyProductImagesFactory', () => {

  let factory: ShopifyProductImagesFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopifyProductImagesFactory],
    });

    factory = TestBed.inject(ShopifyProductImagesFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: ShopifyProductImages;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return', () => {
      expect(result.nodes).toBeDefined();
    });
  });
});
