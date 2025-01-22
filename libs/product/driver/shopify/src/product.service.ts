import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

import { getAllProducts } from './queries/get-all-products/get-all-products';
import { getProduct } from './queries/get-product/get-product';
import {
  AllProductsResponse,
  SingleProductResponse,
} from './queries/response.type';
import { daffShopifyProductTransformer } from './transforms/product.transform';

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
      .query<AllProductsResponse>({
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
      .query<SingleProductResponse>({
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

  getByUrl(url: DaffProduct['url']): Observable<DaffProductDriverResponse> {
    return this.apollo
      .query<AllProductsResponse>({
        query: getAllProducts,
        variables: { length: this.defaultLength },
      })
      .pipe(
        map((result) => {
          const products = result.data?.products?.nodes || [];
          const matchedProduct = products.find((node) => node.onlineStoreUrl === url);
          if (!matchedProduct) {
            throw new Error(`Product with URL ${url} not found.`);
          }
          return {
            id: matchedProduct.id,
            products: [daffShopifyProductTransformer(matchedProduct)],
          };
        }),
      );
  }
}
