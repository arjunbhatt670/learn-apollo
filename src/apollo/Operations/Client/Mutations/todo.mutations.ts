import { gql } from "@apollo/client";

export const ADD_TODO = gql`
    mutation AddTodo($title: String) {
        insert_todos(objects: { title: $title }) {
            returning {
                ...TodoFields
            }
        }
    }
`;

export const DELETE_TODO = gql`
    mutation DeleteTodo($id: Int) {
        delete_todos(where: { id: { _eq: $id } }) {
            returning {
                ...TodoFields
            }
        }
    }
`;
