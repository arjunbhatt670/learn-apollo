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
