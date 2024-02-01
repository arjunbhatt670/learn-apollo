/**
 * This file setup the connection to a graphql server
 */
import { HttpLink } from "@apollo/client";

const protocol = process.env.REACT_APP_GRAPHQL_PROTOCOL;
const host = process.env.REACT_APP_GRAPHQL_HOST;
const route = process.env.REACT_APP_GRAPHQL_ROUTE;
const secret = process.env.REACT_APP_GRAPHQL_ADMIN_SECRET;

const serverLink: HttpLink = new HttpLink({
    uri: `${protocol}://${host}/${route}`,
    headers: {
        Authorization: secret as string,
    },
});

export default serverLink;
