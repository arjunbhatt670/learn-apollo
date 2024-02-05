import { gql } from "@apollo/client";

export const typeDefs = gql`
    type Book {
        lng: String!
    }

    type Novel implements Book {
        category: String!
    }

    type ColoringBook implements Book {
        colors: [String!]!
    }

    type Query {
        books: [Book!]!
    }

    query GetBooks {
        books {
            __typename
            title
            ... on Novel {
                category
            }
            ... on ColoringBook {
                colors
            }
        }
    }
`;
