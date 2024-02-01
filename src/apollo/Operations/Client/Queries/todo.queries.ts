import { gql } from "@apollo/client";

export const USER_TODOS = gql`
    query UserTodos($userId: String = "auth0|65bb40ebf56f87da5ac38a60") {
        todos(where: { user_id: { _eq: $userId } }, order_by: { created_at: desc }) {
            ...TodoFields
        }
    }
`;

export const GET_TODO = gql`
    query GetTodo($id: Int) {
        todos(where: { id: { _eq: $id } }) {
            ...TodoFields
            is_completed
        }
    }
`;

// gql(`query USER {
//     users(where: {id: {_eq: "auth0|65bb40ebf56f87da5ac38a60"}}) {
//       id
//       name
//       todos {
//         ...TODO_FIELDS
//       }
//     }
//   }

//   query USERS {
//     users(limit: 10, order_by: {name: asc}, where: {name: {_ilike: "elonmusk"}}) {
//       name
//       id
//       todos(limit: 2) {
//         id
//       }
//     }
//   }

//   query USER_TODOS {
//     todos(where: { user_id: { _eq: "" } } order_by: {created_at: desc}) {
//       title
//       id
//     }
//   }

//   query GET_TODO($id: Int = 39060) {
//     todos(where: {id: {_eq: $id}}) {
//       ...TODO_FIELDS
//       created_at
//       is_completed
//     }
//   }

//   mutation INSERT_TODO {
//     insert_todos(objects: {title: "Pakka 2"}) {
//       returning {
//         ...TODO_FIELDSå
//       }
//     }
//   }

//   mutation UPDATE_TODO {
//     update_todos(_set: {title: "Pakka", is_completed: true}, where: {id: {_eq: 264074}}) {
//       returning {
//         ...TODO_FIELDS
//         is_completed
//         is_public
//       }
//     }
//   }

//   mutation DELETE_TODO {
//     delete_todos(where: {id: {_eq: 264091}}) {
//       returning {
//         id
//       }

//     }
//   }

//   fragment TODO_FIELDS on todos {
//     id
//     title
//   }
//   `);
