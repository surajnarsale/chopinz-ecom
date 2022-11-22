import { gql } from 'urql';

export const fetchProducts = gql`
  query {
    products {
      data {
        id
        attributes {
          title
          description
          price
          slug
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;
