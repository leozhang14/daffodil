import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffLocatable } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

import { getAllProducts } from './queries/get-all-products/get-all-products';
import { getProduct } from './queries/get-product/get-product';
import { getProductByUrl } from './queries/get-product-by-url/get-product-by-url';
import {
  ShopifyProductAllResponse,
  ShopifyProductSingleResponse,
} from './queries/response.type';
import { daffShopifyProductTransformer } from './transforms/shopify-daff-product-transform';
import { shopifyUrlTransformer } from './transforms/shopify-url-transform';

/**
 * A service for getting DaffProducts from apollo shopify product requests.
 *
 * @inheritdoc
 * @Param apollo
 */
@Injectable({
  providedIn: 'root',
})
export class DaffShopifyProductService
implements DaffProductServiceInterface {
  defaultLength = 20;

  constructor(private apollo: Apollo) {}

  getAll(): Observable<DaffProduct[]> {
    return this.apollo
      .query<ShopifyProductAllResponse>({
        query: getAllProducts,
        variables: {
          length: this.defaultLength,
        },
      })
      .pipe(
        map((result) => {
          const nodes = result.data?.products?.nodes || [];
          console.log(nodes);
          return nodes.map((node) => daffShopifyProductTransformer(node));
        }),
      );
  }

  // todo: implement getBestSellers
  // todo: move to separate getBestSellers module
  getBestSellers(): Observable<DaffProduct[]> {
    return this.getAll();
  }

  get(productId: DaffProduct['id']): Observable<DaffProductDriverResponse> {
    return this.apollo
      .query<ShopifyProductSingleResponse>({
        query: getProduct,
        variables: { id: productId },
      })
      .pipe(
        map((result) => {
          const productNode = result.data;
          return {
            id: productNode.id,
            products: [daffShopifyProductTransformer(productNode)],
          };
        }),
      );
  }

  /**
   * See {@link DaffLocatable} for more information on the requirements for the url argument of {@link DaffProduct}.
   */
  getByUrl(url: DaffProduct['url']): Observable<DaffProductDriverResponse> {
    return this.apollo
      .query<ShopifyProductSingleResponse>({
        query: getProductByUrl,
        variables: { handle: shopifyUrlTransformer(url) },
      })
      .pipe(
        map((result) => {
          const productNode = result.data;
          return {
            id: productNode.id,
            products: [daffShopifyProductTransformer(productNode)],
          };
        }),
      );
  }
}
