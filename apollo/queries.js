import { gql } from "@apollo/client";


export const QUERY_ORDERS_LIST = gql`
    query GetOrdersList {
        orders {
            nodes {
              id
              date
              orderNumber
              customer {
                displayName
                username
              }
            }
        }
    }`;