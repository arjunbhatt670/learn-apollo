import { gql } from "@apollo/client";

const TODO_FIELDS = gql`
    fragment TodoFields on todos {
        id
        title
    }
`;

export const fragments = [TODO_FIELDS];
