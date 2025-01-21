import { Injectable } from '@angular/core';
import {
  Apollo,
  gql,
} from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

interface GetAllProductsResponse {
  products?: ProductGraph;
}

interface ProductGraph {
  edges: ProductEdge[];
}

interface ProductEdge {
  node: ProductNode;
}

interface ProductNode {
  __typename?: 'Product';
  id: string;
  title: string;
  description: string;
  onlineStoreUrl: string;
  priceRange: {
    maxVariantPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  images: {
    nodes: {
      id: string;
      url: string;
      altText: string;
    }[];
  };
}

/**
 * GraphQL query object for getting all products.
 */
export const GetAllProductsQuery = gql`
  query ShopifyGetAllProducts($length: Int) {
    products(first: $length)  {
      edges {
        node {
          onlineStoreUrl
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          id
          title
          description
          images(first: 1) {
            nodes {
              id
              url
              altText
            }
          }
        }
      }
    }
  }
`;

/**
 * GraphQL query object for getting all products.
 */
export const GetProductByIdQuery = gql`
 query ShopifyGetProductById($id: ID!) {
   product(id: $id) {
     id
     title
     description
     priceRange {
       maxVariantPrice {
         amount
         currencyCode
       }
     }
     images(first: 1) {
       nodes {
         id
         url
         altText
       }
     }
     onlineStoreUrl
   }
 }
`;

// To be implemented properly later
export const GetAProduct = GetProductByIdQuery;

/**
 * Transforms a ProductNode into a different object.
 *
 * @param node - ProductNode object
 * @returns A Product object
 */

const DaffShopifyProductTransformer = (node: ProductNode): DaffProduct => ({
  name: node.title,
  images: node.images.nodes.map(imageNode => ({
    id: imageNode.id,
    url: imageNode.url,
    label: imageNode.altText,
  })),
  thumbnail: {
    url: node.images.nodes[0].url,
    label: node.images.nodes[0].altText,
    id: node.images.nodes[0].id,
  },
  id: node.id,
  url: node.onlineStoreUrl,
  type: DaffProductTypeEnum.Simple,
  price: node.priceRange.maxVariantPrice.amount,
  description: node.description,
});

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
      .query<GetAllProductsResponse>({
        query: GetAllProductsQuery,
        variables: {
          length: this.defaultLength,
        },
      })
      .pipe(
        map((result) => {
          const edges = result.data?.products?.edges || [];
          return edges.map((edge) => DaffShopifyProductTransformer(edge.node));
        }),
      );
  }

  // Following methods not yet implemented - could be defaulted to the getAll() method for testing
  getBestSellers(): Observable<DaffProduct[]> {
    return this.getAll();
  }

  get(productId: string): Observable<DaffProductDriverResponse<DaffProduct>> {
    return this.apollo
      .query<ProductNode>({
        query: GetProductByIdQuery,
        variables: { productId },
      })
      .pipe(
        map((result) => {
          const productNode = result.data;
          // Return the transformed data in the expected structure of DaffProductDriverResponse
          return {
            id: productNode.id,
            products: [DaffShopifyProductTransformer(productNode)],
          };
        }),
      );
  }

  getByUrl(url: string): Observable<DaffProductDriverResponse<DaffProduct>> {
    return this.apollo
      .query<GetAllProductsResponse>({
        query: GetAllProductsQuery,
        variables: { first: 50 }, // Adjust the number to fit max number of products in store
      })
      .pipe(
        map((result) => {
          const products = result.data?.products?.edges || [];
          // Find the product by matching the URL
          const matchedProduct = products.find((edge) => edge.node.onlineStoreUrl === url)?.node;
          if (!matchedProduct) {
            throw new Error(`Product with URL ${url} not found.`);
          }
          // Transform the matched product into the expected DaffProductDriverResponse format
          return {
            id: matchedProduct.id,
            products: [DaffShopifyProductTransformer(matchedProduct)],
          };
        }),
      );
  }
}
